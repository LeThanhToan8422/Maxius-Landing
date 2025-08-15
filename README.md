# Maxius Landing Page

Một landing page hiện đại và responsive được xây dựng bằng Next.js, TypeScript và Tailwind CSS, lấy cảm hứng từ [Maxius.io](http://maxius.io/).

## 🚀 Tính năng

- **Next.js 15** với App Router
- **TypeScript** strict mode
- **Tailwind CSS** với JIT compiler và `!important` utilities
- **Framer Motion** cho animations mượt mà
- **Ant Design** cho UI components
- **i18next** cho đa ngôn ngữ (Tiếng Việt & Tiếng Anh)
- **Responsive design** cho mọi thiết bị
- **SEO optimized** với meta tags
- **Performance optimized** với lazy loading
- **Accessibility** với ARIA labels
- **Custom hooks** cho scroll tracking và language management

## 🛠️ Cài đặt

1. **Clone repository:**

```bash
git clone <your-repo-url>
cd maxius-landing
```

2. **Cài đặt dependencies:**

```bash
npm install
```

3. **Chạy development server:**

```bash
npm run dev
```

4. **Mở trình duyệt:**

```
http://localhost:3000
```

## 📁 Cấu trúc thư mục

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout với i18n provider
│   ├── page.tsx        # Home page với đa ngôn ngữ
│   └── globals.css     # Global styles
├── components/          # Reusable components
│   ├── layout/         # Layout components
│   │   ├── Header.tsx  # Navigation với language switcher
│   │   └── Footer.tsx  # Footer với đa ngôn ngữ
│   ├── sections/       # Page sections
│   │   └── Section.tsx # Generic section wrapper
│   └── ui/             # UI components
│       ├── LanguageSwitcher.tsx # Language toggle
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Animation.tsx
├── constants/          # App constants
│   ├── navigation.ts   # Navigation items
│   ├── content.ts      # Static content
│   └── config.ts       # App configuration
├── hooks/              # Custom hooks
│   ├── useScrollPosition.ts
│   ├── useLanguage.ts  # Language management
│   └── useIntersectionObserver.ts
├── i18n/               # Internationalization
│   ├── index.ts        # i18n configuration
│   └── locales/        # Translation files
│       ├── vi.json     # Vietnamese translations
│       └── en.json     # English translations
├── lib/                # Library configurations
│   ├── antd-config.ts  # Ant Design theme
│   └── framer-motion.ts
├── styles/             # Global styles
├── types/              # TypeScript types
└── utils/              # Utility functions
    ├── scroll.ts       # Scroll utilities
    ├── formatting.ts   # Text formatting
    └── validation.ts   # Form validation
```

## 🌐 Đa ngôn ngữ (i18n)

### **Hỗ trợ ngôn ngữ:**

- 🇻🇳 **Tiếng Việt** (mặc định)
- 🇺🇸 **Tiếng Anh**

### **Language Switcher:**

- Toggle switch hiện đại với flag icons
- Hover effects và animations mượt mà
- Responsive design cho mobile và desktop

### **Translation Keys:**

- Navigation items
- Page content (hero, about, features, contact)
- Form labels và validation messages
- Footer content

## 🎨 Styling

- **Tailwind CSS** cho utility-first styling
- **`!important` utilities** để override Ant Design styles
- **Custom color palette** với primary và secondary colors
- **Custom animations** cho smooth transitions
- **Responsive breakpoints** cho mọi thiết bị
- **Consistent design system** với unified styling

## 🎭 Animations

- **Framer Motion** cho scroll-triggered animations
- **Intersection Observer** cho performance
- **Hover effects** mượt mà
- **Loading states** và transitions
- **Language switcher animations**

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions
- **Optimized** cho mọi screen size
- **Mobile navigation** với hamburger menu

## 🔧 Custom Hooks

### **useScrollPosition:**

- Track scroll position
- Optimized với throttling
- SSR safe

### **useLanguage:**

- Manage current language
- Toggle between languages
- Persist language preference

### **useIntersectionObserver:**

- Scroll-triggered animations
- Performance optimized
- Fallback support

## 🚀 Build & Deploy

1. **Build production:**

```bash
npm run build
```

2. **Start production server:**

```bash
npm start
```

3. **Deploy to Vercel:**

```bash
npm run deploy
```

## 🔧 Scripts

- `npm run dev` - Development server
- `npm run build` - Build production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Performance

- **Lighthouse Score**: > 90
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized
- **Image Optimization**: Lazy loading
- **i18n**: Static imports cho performance

## ♿ Accessibility

- **ARIA labels** đầy đủ
- **Keyboard navigation**
- **Screen reader** friendly
- **Focus management**
- **Language indicators** cho screen readers

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🤝 Contributing

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Support

Nếu có vấn đề gì, hãy tạo issue hoặc liên hệ trực tiếp.

## 📚 Documentation

- [STRUCTURE.md](./STRUCTURE.md) - Chi tiết cấu trúc project
- [I18N_SETUP.md](./I18N_SETUP.md) - Hướng dẫn i18n setup và usage
