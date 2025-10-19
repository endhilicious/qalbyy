# Premium Loading Component

Premium loading component dengan heartbeat animation dan branding customization untuk aplikasi Qalbyy.

## 🚀 Features

- **Heartbeat Animation**: Elegant pulsing animation dengan multiple layers
- **Dynamic Branding**: Customizable colors dan logo via props
- **Multiple Sizes**: Small, medium, large, dan extra-large variants
- **Progress Bar**: Optional progress indicator dengan smooth transitions
- **Fullscreen Overlay**: Can be used as fullscreen loading atau inline component
- **Responsive Design**: Works perfectly pada semua screen sizes
- **Accessibility**: Proper ARIA labels dan semantic HTML

## 📦 Installation

Component sudah tersedia di `src/components/PremiumLoading/`

```tsx
import PremiumLoading from '@/components/PremiumLoading';
// atau
import { PremiumLoading } from '@/components/PremiumLoading';
```

## 🎨 Usage Examples

### Basic Usage

```tsx
<PremiumLoading />
```

### Dengan Custom Branding

```tsx
<PremiumLoading
  message="Selamat Datang di Qalbyy"
  subMessage="Menyiapkan pengalaman terbaik untuk Anda..."
  logo="/Qalbyy-logo-black.png"
  logoAlt="Qalbyy"
  primaryColor="green"
  secondaryColor="emerald"
  size="xl"
/>
```

### Dengan Progress Bar

```tsx
const [progress, setProgress] = useState(0);

<PremiumLoading
  message="Memuat data..."
  showProgress={true}
  progress={progress}
  primaryColor="green"
/>
```

### Inline Loading (Non-Fullscreen)

```tsx
<PremiumLoading
  fullscreen={false}
  message="Memproses..."
  primaryColor="green"
  size="md"
/>
```

## 🎯 Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | string | "Memuat..." | Main loading message |
| `size` | 'sm' \| 'md' \| 'lg' \| 'xl' | 'lg' | Component size |
| `className` | string | '' | Additional CSS classes |
| `fullscreen` | boolean | true | Show as fullscreen overlay |
| `showProgress` | boolean | false | Show progress bar |
| `progress` | number | 0 | Progress percentage (0-100) |
| `logo` | string | undefined | Logo image URL |
| `logoAlt` | string | 'Logo' | Alt text for logo |
| `primaryColor` | string | 'green' | Primary brand color |
| `secondaryColor` | string | 'emerald' | Secondary brand color |
| `subMessage` | string | 'Mohon tunggu sebentar...' | Additional loading text |

## 🌈 Available Color Schemes

- **blue** - Blue dan Indigo
- **amber** - Amber dan Yellow  
- **green** - Green dan Emerald (default untuk Qalbyy)
- **purple** - Purple dan Violet
- **red** - Red dan Rose

## 🛠️ AppLoading Wrapper

Untuk kemudahan penggunaan, tersedia wrapper `AppLoading` dengan konfigurasi default Qalbyy:

```tsx
import AppLoading from '@/components/AppLoading';

<AppLoading
  isLoading={true}
  message="Menyiapkan Qalbyy untuk Anda..."
  progress={progress}
  showProgress={true}
/>
```

## 🎭 Animations

Component menggunakan custom CSS animations yang sudah ditambahkan ke `globals.css`:

- `animate-heartbeat` - Heartbeat pulsing animation
- `animate-ping` - Pulsing rings
- `animate-pulse` - Inner ring animation
- `animate-bounce` - Loading dots animation

## 📱 Responsive Design

Component fully responsive dan akan menyesuaikan dengan ukuran layar:

- Mobile: Optimal sizing dan touch-friendly
- Tablet: Balanced proportions
- Desktop: Full-featured display

## ♿ Accessibility

- Proper ARIA labels
- Semantic HTML structure
- Screen reader friendly
- Keyboard navigation support

## 🔧 Customization

### Custom Logo

```tsx
<PremiumLoading
  logo="/path/to/your/logo.png"
  logoAlt="Your Brand"
/>
```

### Custom Colors

```tsx
<PremiumLoading
  primaryColor="purple"
  secondaryColor="violet"
/>
```

### Custom Styling

```tsx
<PremiumLoading
  className="custom-loading-class"
  fullscreen={false}
/>
```

## 📄 Demo

Lihat demo lengkap di: `/loading-demo`

Demo page menyediakan:
- Interactive controls untuk semua props
- Live preview
- Code examples
- Props documentation

## 🎯 Best Practices

1. **Use AppLoading untuk implementasi cepat** dengan branding Qalbyy
2. **Use PremiumLoading untuk customization penuh**
3. **Keep loading times reasonable** (2-3 seconds max)
4. **Provide meaningful messages** untuk user experience yang baik
5. **Use progress bar untuk loading yang memakan waktu**

## 🐛 Troubleshooting

### Animation tidak berfungsi
- Pastikan CSS animations sudah ditambahkan ke `globals.css`
- Check bahwa Tailwind CSS sudah properly configured

### Colors tidak muncul
- Gunakan color schemes yang sudah predefined
- Pastikan Tailwind classes ter-include dalam build

### Logo tidak muncul
- Verify image path dan accessibility
- Pastikan image format supported (PNG, JPG, SVG)

## 📝 License

Component ini adalah bagian dari aplikasi Qalbyy dan mengikuti lisensi project yang sama.
