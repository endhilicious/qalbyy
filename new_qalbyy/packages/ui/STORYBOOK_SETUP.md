# Storybook Setup Guide - packages/ui

Panduan lengkap untuk menjalankan Storybook di `packages/ui`.

## Prerequisites

- Node.js dan pnpm sudah terinstall
- Berada di root project `/Users/aryandi37/Documents/projects/master-solution`

## Setup Steps

### 1. Install Storybook Dependencies

Tambahkan dependencies Storybook ke `packages/ui/package.json`:

```bash
cd packages/ui
pnpm add -D @storybook/react @storybook/react-vite @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/blocks @storybook/test storybook
```

### 2. Install Tailwind CSS (untuk styling components)

```bash
pnpm add -D tailwindcss postcss autoprefixer
```

### 3. Buat Konfigurasi Storybook

Buat folder `.storybook` dan file konfigurasinya:

**`.storybook/main.ts`**

```typescript
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
```

**`.storybook/preview.ts`**

```typescript
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css"; // Tailwind CSS

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
```

### 4. Buat Tailwind Config

**`tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**`postcss.config.js`**

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 5. Buat CSS File untuk Tailwind

**`src/styles/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Update package.json Scripts

Tambahkan scripts untuk menjalankan Storybook:

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

### 7. Jalankan Storybook

Dari root project:

```bash
cd packages/ui
pnpm storybook
```

Atau dari root project (jika menggunakan turbo):

```bash
pnpm --filter @repo/ui storybook
```

Storybook akan berjalan di: **http://localhost:6006**

## Troubleshooting

### Error: Cannot find module 'lucide-react'

Install lucide-react:

```bash
pnpm add lucide-react
```

### Error: Tailwind classes tidak muncul

Pastikan `src/styles/globals.css` sudah di-import di `.storybook/preview.ts`

### Error: Module resolution

Pastikan tsconfig.json sudah benar dan baseUrl sudah diset jika menggunakan path aliases.

## Available Stories

Setelah Storybook berjalan, kamu bisa melihat stories dari components:

- ✅ Button
- ✅ Card
- ✅ Code
- ✅ Dropdown
- ✅ InfiniteLoader
- ✅ InputEmail
- ✅ InputPassword
- ✅ InputText
- ✅ InputTextarea
- ✅ Modal

## Quick Commands

```bash
# Install semua dependencies
pnpm install

# Jalankan Storybook (dev mode)
pnpm storybook

# Build Storybook (static)
pnpm build-storybook

# Check types
pnpm check-types

# Lint
pnpm lint
```

## File Structure After Setup

```
packages/ui/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── styles/
│   │   └── globals.css
│   ├── lib/
│   │   └── utils.ts
│   ├── Dropdown/
│   │   ├── Dropdown.tsx
│   │   ├── Dropdown.stories.tsx
│   │   └── __tests__/
│   └── ...other components
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Notes

- Storybook menggunakan Vite sebagai bundler (lebih cepat dari Webpack)
- Port default: 6006 (bisa diubah dengan flag `-p`)
- Stories menggunakan Component Story Format 3 (CSF3)
- Semua components sudah memiliki story files yang lengkap
