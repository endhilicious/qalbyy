'use client';
// PENTING: Komponen reusable ini digunakan luas di seluruh modul. Setiap perubahan WAJIB direkap di file 'recapt-changes-customricheditor.md' pada folder komponen ini (packages/ui/src/CustomRichEditor). Sertakan tanggal, lokasi baris/kode, dan alasan perubahan. Lakukan review ekstra hati-hati sebelum merge.

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill-new';

// Katex for math rendering
let katex: any = null;

// Conditional import untuk client-side
if (typeof window !== 'undefined') {
  try {
    katex = require('katex');

    // Register image resize module
    const ImageResize = require('quill-image-resize-module-react');
    Quill.register('modules/imageResize', ImageResize);

    // Register custom math blot for LaTeX rendering
    if (Quill && katex) {
      const BlockEmbed = Quill.import('blots/block/embed') as any;
      const InlineEmbed = Quill.import('blots/inline') as any;

      // Custom Math Blot for display math $$...$$
      class MathBlot extends BlockEmbed {
        static blotName = 'math';
        static tagName = 'div';
        static className = 'ql-math';
        static scope = Quill.import('parchment').Scope.BLOCK_BLOT;

        static create(value: string) {
          const node = super.create();
          node.setAttribute('data-latex', value);
          node.classList.add('math-display');

          try {
            const rendered = katex.renderToString(value, {
              throwOnError: false,
              displayMode: true,
            });
            node.innerHTML = rendered;
          } catch (error) {
            node.textContent = `$$${value}$$`;
          }

          return node;
        }

        static value(node: HTMLElement) {
          return node.getAttribute('data-latex');
        }
      }

      // Custom Inline Math Blot for inline math \(...\)
      class InlineMathBlot extends InlineEmbed {
        static blotName = 'inline-math';
        static tagName = 'span';
        static className = 'ql-inline-math';
        static scope = Quill.import('parchment').Scope.INLINE_BLOT;

        static create(value: string) {
          const node = super.create();
          node.setAttribute('data-latex', value);
          node.classList.add('math-inline');

          try {
            const rendered = katex.renderToString(value, {
              throwOnError: false,
              displayMode: false,
            });
            node.innerHTML = rendered;
          } catch (error) {
            node.textContent = `\\(${value}\\)`;
          }

          return node;
        }

        static value(node: HTMLElement) {
          return node.getAttribute('data-latex');
        }
      }

      // Register the blots
      Quill.register('formats/math', MathBlot);
      Quill.register('formats/inline-math', InlineMathBlot);
    }
  } catch (error) {
    console.error('Failed to load dependencies:', error);
  }
}

// Import CSS
import 'react-quill-new/dist/quill.snow.css';
import 'katex/dist/katex.min.css';

export interface CustomRichEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
  readOnly?: boolean;
  className?: string;
  showMathButton?: boolean;
  onImageUpload?: (file: File) => Promise<string>;
}

export const CustomRichEditor: React.FC<CustomRichEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write something...',
  height = '200px',
  readOnly = false,
  className = '',
  showMathButton = true,
  onImageUpload,
}) => {
  const [isMathModalOpen, setIsMathModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [editorKey, setEditorKey] = useState(0);
  const reactQuillRef = useRef<ReactQuill>(null);

  const handleChange = useCallback((content: string) => {
    try {
      onChange(content);
      setHasError(false);
    } catch (error) {
      console.error('Error updating content:', error);
      setHasError(true);
    }
  }, [onChange]);

  const insertMathEquation = useCallback((latex: string, isInline: boolean = false) => {
    if (reactQuillRef.current) {
      try {
        const editor = (reactQuillRef.current as any).getEditor();
        const range = editor.getSelection();
        const index = range ? range.index : editor.getLength();
        
        if (isInline) {
          editor.insertEmbed(index, 'inline-math', latex);
        } else {
          editor.insertEmbed(index, 'math', latex);
        }
        
        editor.setSelection(index + 1);
      } catch (error) {
        console.error('Error inserting math equation:', error);
      }
    }
  }, []);

  const insertImageSafely = useCallback((imageUrl: string) => {
    if (reactQuillRef.current) {
      try {
        const quillInstance = (reactQuillRef.current as any).getEditor();
        const range = quillInstance.getSelection();
        const index = range ? range.index : quillInstance.getLength();
        quillInstance.insertEmbed(index, 'image', imageUrl);
        quillInstance.setSelection(index + 1);
      } catch (error) {
        console.error('Error inserting image:', error);
      }
    }
  }, []);

  const handleImageUpload = useCallback(async () => {
    if (!onImageUpload) return;

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.style.display = 'none';

    document.body.appendChild(input);

    input.onchange = async (e) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file) {
        try {
          const imageUrl = await onImageUpload(file);
          insertImageSafely(imageUrl);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }

      document.body.removeChild(input);
    };

    input.click();
  }, [onImageUpload, insertImageSafely]);

  // Quill modules configuration
  const modules = useMemo(() => {
    const baseModules = {
      toolbar: {
        container: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          ['blockquote', 'code-block'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'align': [] }],
          ['link', 'image'],
          ['clean']
        ],
        handlers: {
          image: handleImageUpload
        }
      },
      clipboard: {
        matchVisual: false,
      }
    } as any;

    // Add imageResize module if available
    if (typeof window !== 'undefined') {
      baseModules.imageResize = {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
      };
    }

    return baseModules;
  }, [handleImageUpload]);

  // Quill formats configuration
  const formats = useMemo(
    () => [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'list',
      'indent',
      'align',
      'link',
      'image',
      'math',
      'inline-math',
      'color',
      'background',
      'script',
      'code-block',
    ],
    []
  );

  // SSR check
  if (typeof window === 'undefined') {
    return <div>Loading...</div>;
  }

  // Error state
  if (hasError) {
    return (
      <div className={`custom-rich-editor ${className}`}>
        <div className="border border-red-300 bg-red-50 p-4 rounded-md">
          <div className="flex items-center space-x-2 text-red-800">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Editor mengalami masalah</span>
          </div>
          <p className="text-red-700 mt-2 text-sm">
            Terjadi error pada rich text editor. Silakan coba lagi.
          </p>
          <button
            onClick={() => {
              setHasError(false);
              setEditorKey(prev => prev + 1);
            }}
            className="mt-3 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`custom-rich-editor ${className}`}>
      <div className="editor-container">
        {/* Fixed Math Button Header */}
        {showMathButton && (
          <div className="math-toolbar-header">
            <button
              onClick={() => setIsMathModalOpen(true)}
              className="math-equation-btn"
              title="Insert Math Equation"
            >
              <span className="math-symbol">Σ</span>
              <span className="math-label">Math</span>
            </button>
          </div>
        )}

        {/* Fixed Quill Toolbar */}
        <div className="toolbar-container">
          <div className="quill-wrapper">
            <ReactQuill
              key={editorKey}
              theme="snow"
              value={value}
              onChange={handleChange}
              modules={modules}
              formats={formats}
              placeholder={placeholder}
              readOnly={readOnly}
              className="quill-root"
              style={{ height: '100%' }}
              ref={(el) => {
                if (el) {
                  reactQuillRef.current = el;
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Math Equation Modal */}
      {isMathModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsMathModalOpen(false)}>
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Insert Math Equation</h3>
              <button 
                onClick={() => setIsMathModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div>
              <textarea
                placeholder="Enter LaTeX equation (e.g., x^2 + y^2 = z^2)"
                className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg font-mono text-sm resize-y mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.ctrlKey) {
                    const latex = (e.target as HTMLTextAreaElement).value;
                    if (latex.trim()) {
                      insertMathEquation(latex.trim(), e.shiftKey);
                      setIsMathModalOpen(false);
                    }
                  }
                }}
              />
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => {
                    const input = document.querySelector('textarea') as HTMLTextAreaElement;
                    const latex = input?.value?.trim();
                    if (latex) {
                      insertMathEquation(latex, false);
                      setIsMathModalOpen(false);
                    }
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-sm font-medium transition-colors"
                >
                  Insert Block
                </button>
                <button
                  onClick={() => {
                    const input = document.querySelector('textarea') as HTMLTextAreaElement;
                    const latex = input?.value?.trim();
                    if (latex) {
                      insertMathEquation(latex, true);
                      setIsMathModalOpen(false);
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium transition-colors"
                >
                  Insert Inline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Global Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Main Container */
          .custom-rich-editor {
            width: 100%;
            position: relative;
            --quill-toolbar-height: 42px;
          }
          
           .custom-rich-editor .editor-container {
             border: 1px solid #e2e8f0;
             border-radius: 12px;
             background: white;
             box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
             transition: all 0.2s ease;
             display: flex;
             flex-direction: column;
             height: ${parseInt(height.replace('px', '')) + 160}px;
             overflow: visible;
             background-clip: padding-box;
           }
          
          .custom-rich-editor .editor-container:hover {
            border-color: #cbd5e1;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          
          .custom-rich-editor .editor-container:focus-within {
            border-color: #cbd5e1;
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
          }
          
          /* Fixed Math Button Header */
          .custom-rich-editor .math-toolbar-header {
            position: sticky;
            top: 0;
            z-index: 10;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-bottom: 0;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            border-radius: 12px 12px 0 0;
          }
          
          .custom-rich-editor .math-equation-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }
          
          .custom-rich-editor .math-equation-btn:hover {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
          }
          
          .custom-rich-editor .math-equation-btn:active {
            transform: translateY(0);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }
          
          .custom-rich-editor .math-symbol {
            font-size: 16px;
            font-weight: 600;
            line-height: 1;
          }
          
          .custom-rich-editor .math-label {
            font-size: 12px;
            font-weight: 500;
            opacity: 0.95;
          }
          
          /* Toolbar Container */
          .custom-rich-editor .toolbar-container {
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 0;
          }
          
          .custom-rich-editor .quill-wrapper {
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 0;
          }
          
          /* Fixed Quill Toolbar */
          .custom-rich-editor .ql-toolbar.ql-snow {
            position: relative !important;
            z-index: 9 !important;
            border: none !important;
            border-bottom: 1px solid #e2e8f0 !important;
            background: #fafbfc !important;
            padding: 8px 12px !important;
            border-radius: 0 !important;
            flex-shrink: 0 !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            min-height: var(--quill-toolbar-height) !important;
            box-sizing: border-box !important;
          }
          
          /* Scrollable Editor Container */
          .custom-rich-editor .ql-container.ql-snow {
            border: none !important;
            border-radius: 0 0 12px 12px !important;
            background: white !important;
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            min-height: 0 !important;
            overflow: hidden !important;
            height: calc(100% - var(--quill-toolbar-height)) !important;
            background-clip: padding-box;
          }
          
          /* Scrollable Text Area */
          .custom-rich-editor .ql-editor {
            height: 100% !important;
            min-height: 0 !important;
            overflow-y: auto !important;
            font-size: 14px;
            line-height: 1.6;
            padding: 12px;
            color: #1f2937;
            flex: 1;
            border: none !important;
            border-radius: 0 !important;
            background-clip: padding-box;
          }
          
          /* Custom Scrollbar */
          .custom-rich-editor .ql-editor::-webkit-scrollbar {
            width: 6px;
          }
          
          .custom-rich-editor .ql-editor::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 3px;
          }
          
          .custom-rich-editor .ql-editor::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
          }
          
          .custom-rich-editor .ql-editor::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
          
          /* Math Blots Styling */
          .custom-rich-editor .ql-math {
            display: block;
            text-align: center;
            margin: 16px 0;
            padding: 16px;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .custom-rich-editor .ql-math:hover {
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            border-color: #cbd5e1;
            transform: translateY(-1px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          
          .custom-rich-editor .ql-inline-math {
            display: inline-block;
            vertical-align: middle;
            margin: 0 3px;
            padding: 4px 8px;
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            border: 1px solid #93c5fd;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .custom-rich-editor .ql-inline-math:hover {
            background: linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%);
            border-color: #60a5fa;
            transform: translateY(-1px);
          }
          
          /* Image Styling */
          .custom-rich-editor .ql-editor img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1em 0;
          }
          `,
        }}
      />
    </div>
  );
};

export default CustomRichEditor;