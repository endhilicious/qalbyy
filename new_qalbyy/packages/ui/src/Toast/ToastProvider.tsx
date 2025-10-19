"use client";
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-toastprovider.md' pada folder komponen ini (packages/ui/src/Toast). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

export type ToastType = "info" | "success" | "error";

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
  duration?: number; // ms
}

interface ToastContextValue {
  toasts: ToastMessage[];
  showToast: (type: ToastType, message: string, duration?: number) => void;
  showInfo: (message: string, duration?: number) => void;
  showSuccess: (message: string, duration?: number) => void;
  showError: (message: string, duration?: number) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const timers = useRef<Record<string, number>>({});

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const tid = timers.current[id];
    if (tid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      clearTimeout(tid);
      delete timers.current[id];
    }
  }, []);

  const showToast = useCallback((type: ToastType, message: string, duration = 4000) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const toast: ToastMessage = { id, type, message, duration };
    setToasts((prev) => [...prev, toast]);
    timers.current[id] = (setTimeout(() => {
      dismiss(id);
    }, duration) as unknown) as number;
  }, [dismiss]);

  const showInfo = useCallback((message: string, duration?: number) => showToast("info", message, duration), [showToast]);
  const showSuccess = useCallback((message: string, duration?: number) => showToast("success", message, duration), [showToast]);
  const showError = useCallback((message: string, duration?: number) => showToast("error", message, duration), [showToast]);

  const value = useMemo(() => ({ toasts, showToast, showInfo, showSuccess, showError, dismiss }), [toasts, showToast, showInfo, showSuccess, showError, dismiss]);

  // Bridge: listen to global events dispatched from packages that cannot import UI directly (e.g., @repo/core)
  useEffect(() => {
    const handler = (e: Event) => {
      try {
        const detail = (e as CustomEvent).detail as Partial<ToastMessage> & { type?: ToastType; message?: string; duration?: number };
        if (!detail || !detail.message) return;
        const type: ToastType = (detail.type as ToastType) || "info";
        const duration = typeof detail.duration === "number" ? detail.duration : undefined;
        showToast(type, detail.message!, duration);
      } catch {}
    };
    window.addEventListener("jilc:toast", handler as EventListener);
    return () => {
      window.removeEventListener("jilc:toast", handler as EventListener);
    };
  }, [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}

export function ToastViewport() {
  const { toasts, dismiss } = useToast();
  return (
    <div className="fixed top-4 right-4 z-[1000] flex flex-col gap-2 w-[min(380px,calc(100vw-2rem))]">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={[
            "rounded-md shadow-lg px-4 py-3 text-sm text-white",
            t.type === "success" && "bg-green-600",
            t.type === "error" && "bg-red-600",
            t.type === "info" && "bg-blue-600",
          ].filter(Boolean).join(" ")}
          role="alert"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              {t.message}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="text-white/90 hover:text-white focus:outline-none"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}