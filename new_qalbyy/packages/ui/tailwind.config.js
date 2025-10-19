/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // Switch component - background colors
    'bg-blue-600',
    'bg-emerald-600',
    'bg-purple-600',
    'bg-red-600',
    'bg-teal-600',
    'bg-gray-300',
    // Switch component - focus rings
    'focus-visible:ring-blue-300',
    'focus-visible:ring-emerald-300',
    'focus-visible:ring-purple-300',
    'focus-visible:ring-red-300',
    'focus-visible:ring-teal-300',
    // Switch component - translations
    'translate-x-0.5',
    'translate-x-4',
    'translate-x-5',
    'translate-x-7',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

