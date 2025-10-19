// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-unsavedchangesprompt.md' pada folder komponen ini (packages/ui/src/UnsavedChangesPrompt). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.
import type { FC } from "react";
import { Modal } from "../Modal/Modal";

export interface UnsavedChangesPromptProps {
  isOpen: boolean;
  onLeave: () => void;
  onStay: () => void;
  title?: string;
  description?: string;
  leaveLabel?: string;
  stayLabel?: string;
}

export const UnsavedChangesPrompt: FC<UnsavedChangesPromptProps> = ({
  isOpen,
  onLeave,
  onStay,
  title = "Keluar dari halaman?",
  description =
    "Perubahan yang belum disimpan akan hilang dan tidak dapat dikembalikan.",
  leaveLabel = "Keluar tanpa menyimpan",
  stayLabel = "Tetap di halaman",
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onStay}
      title={title}
      size="md"
      closeOnOverlayClick={false}
    >
      <div className="space-y-5">
        <p className="text-gray-700">{description}</p>
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onStay}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            {stayLabel}
          </button>
          <button
            type="button"
            onClick={onLeave}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
          >
            {leaveLabel}
          </button>
        </div>
      </div>
    </Modal>
  );
};