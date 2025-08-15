# I18N Setup Guide - MAXIUS Landing Page

## Tổng quan

Dự án đã được tích hợp i18next để hỗ trợ đa ngôn ngữ (Tiếng Việt và Tiếng Anh) với language switcher hiện đại và performance tối ưu.

## Cấu trúc thư mục

```
src/
├── i18n/
│   ├── index.ts          # Cấu hình i18next
│   └── locales/
│       ├── vi.json       # Bản dịch tiếng Việt
│       └── en.json       # Bản dịch tiếng Anh
├── hooks/
│   └── useLanguage.ts    # Hook quản lý ngôn ngữ
├── components/
│   ├── ui/
│   │   └── LanguageSwitcher.tsx  # Component chuyển đổi ngôn ngữ
│   └── I18nProvider.tsx  # Provider cho i18n initialization
└── app/
    └── layout.tsx        # Root layout với I18nProvider
```

## 🚀 Tính năng mới

### **Language Switcher hiện đại:**

- **Toggle switch design** với flag icons
- **Hover effects** và animations mượt mà
- **Responsive design** cho mobile và desktop
- **Visual feedback** rõ ràng cho ngôn ngữ đang chọn

### **Performance tối ưu:**

- **Static imports** thay vì HTTP backend
- **Client-side initialization** để tránh SSR issues
- **Lazy loading** cho translation files
- **Memory efficient** với proper cleanup

### **Developer Experience:**

- **Type-safe** translation keys
- **Hot reload** support
- **Error handling** tốt hơn
- **Debug mode** cho development

## Cách sử dụng

### 1. Sử dụng hook useLanguage

```tsx
import { useLanguage } from "@/hooks";

const MyComponent = () => {
  const {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    isVietnamese,
    isEnglish,
  } = useLanguage();

  return (
    <div>
      <p>Current language: {currentLanguage}</p>
      <button onClick={() => changeLanguage("en")}>Switch to English</button>
      <button onClick={() => changeLanguage("vi")}>Switch to Vietnamese</button>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
};
```

### 2. Sử dụng useTranslation

```tsx
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.description")}</p>
      <button>{t("hero.cta.primary")}</button>
    </div>
  );
};
```

### 3. Sử dụng LanguageSwitcher component

```tsx
import { LanguageSwitcher } from "@/components/ui";

const Header = () => {
  return (
    <header>
      <nav>{/* Navigation items */}</nav>
      <LanguageSwitcher />
    </header>
  );
};
```

### 4. Thêm bản dịch mới

1. **Thêm key vào `src/i18n/locales/vi.json`:**

```json
{
  "newSection": {
    "title": "Tiêu đề mới",
    "description": "Mô tả mới",
    "features": ["Tính năng 1", "Tính năng 2", "Tính năng 3"]
  }
}
```

2. **Thêm bản dịch tiếng Anh vào `src/i18n/locales/en.json`:**

```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description",
    "features": ["Feature 1", "Feature 2", "Feature 3"]
  }
}
```

3. **Sử dụng trong component:**

```tsx
const { t } = useTranslation();

// Text đơn giản
return <h1>{t("newSection.title")}</h1>;

// Array translations
const features = t("newSection.features", { returnObjects: true }) as string[];
return (
  <ul>
    {features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
);
```

## 🎨 Language Switcher Design

### **Desktop Version:**

```tsx
<LanguageSwitcher />
```

### **Mobile Version:**

```tsx
<LanguageSwitcher variant="mobile" />
```

### **Custom Styling:**

```tsx
<LanguageSwitcher className="my-custom-class" />
```

### **Features:**

- **Flag icons** cho mỗi ngôn ngữ
- **Hover animations** với scale và y-offset
- **Active state** với gradient background
- **Accessibility** với ARIA labels
- **Keyboard navigation** support

## 🔧 Configuration

### **i18n Configuration (`src/i18n/index.ts`):**

```typescript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import vi from "./locales/vi.json";
import en from "./locales/en.json";

const resources = {
  vi: { translation: vi },
  en: { translation: en },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "vi",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
```

### **I18nProvider (`src/components/I18nProvider.tsx`):**

```tsx
"use client";

import React from "react";
import "@/i18n";

type Props = { children: React.ReactNode };

const I18nProvider: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default I18nProvider;
```

## 📋 Translation Keys Reference

### **Navigation**

- `navigation.home` - Trang chủ / Home
- `navigation.about` - Giới thiệu / About
- `navigation.features` - Tính năng / Features
- `navigation.contact` - Liên hệ / Contact
- `navigation.information` - Thông tin / Information

### **Header**

- `header.title` - MAXIUS
- `header.startNow` - Bắt đầu ngay / Get Started
- `header.language.vi` - VI
- `header.language.en` - EN
- `header.aria.*` - Accessibility labels

### **Hero Section**

- `hero.tag` - Nền tảng công nghệ hàng đầu Việt Nam / Key Features
- `hero.title` - MAXIUS
- `hero.subtitle` - MAX I & US
- `hero.description` - Mô tả công ty / Company description
- `hero.cta.primary` - Bắt đầu ngay / Get Started
- `hero.cta.secondary` - Tìm hiểu thêm / Learn More
- `hero.features.*` - Feature highlights

### **About Section**

- `about.tag` - Về chúng tôi / About Us
- `about.title` - Tại sao chọn Maxius? / Why Choose Maxius?
- `about.description` - Mô tả / Description
- `about.features.*` - Feature cards

### **Features Section**

- `features.tag` - Tính năng nổi bật / Key Features
- `features.title` - Khám phá sức mạnh của Maxius / Discover the Power of Maxius
- `features.description` - Mô tả / Description
- `features.items.projectManagement.*` - Project management features
- `features.items.integration.*` - Integration features

### **Contact Section**

- `contact.tag` - Liên hệ / Contact
- `contact.title` - Sẵn sàng để bắt đầu? / Ready to Get Started?
- `contact.description` - Mô tả / Description
- `contact.info.*` - Contact information
- `contact.form.*` - Contact form
- `contact.form.validation.*` - Form validation messages

### **Footer**

- `footer.description` - Mô tả công ty / Company description
- `footer.contactInfo` - Thông tin liên hệ / Contact Information
- `footer.followUs` - Theo dõi chúng tôi / Follow Us
- `footer.copyright` - Bản quyền / Copyright
- `footer.links.*` - Footer links
- `footer.legal.*` - Legal information

## 🐛 Troubleshooting

### **Lỗi "Cannot find module './locales/vi.json'"**

- ✅ Đảm bảo file JSON tồn tại
- ✅ Kiểm tra đường dẫn import
- ✅ Restart development server

### **Text không thay đổi khi chuyển ngôn ngữ**

- ✅ Kiểm tra key translation có đúng không
- ✅ Đảm bảo component sử dụng `useTranslation()`
- ✅ Kiểm tra console có lỗi gì không
- ✅ Đảm bảo I18nProvider được wrap đúng cách

### **Ngôn ngữ không được lưu**

- ✅ Kiểm tra localStorage có hoạt động không
- ✅ Đảm bảo không có lỗi JavaScript
- ✅ Kiểm tra browser privacy settings

### **Language switcher không hiển thị**

- ✅ Đảm bảo component được import đúng
- ✅ Kiểm tra CSS classes có conflict không
- ✅ Đảm bảo Ant Design styles được override

### **Performance issues**

- ✅ Sử dụng static imports
- ✅ Tránh dynamic imports trong production
- ✅ Kiểm tra bundle size

## 🔄 Migration Guide

### **Từ hardcoded text sang i18n:**

**Trước:**

```tsx
return <h1>Welcome to Maxius</h1>;
```

**Sau:**

```tsx
const { t } = useTranslation();
return <h1>{t("hero.title")}</h1>;
```

### **Từ inline styles sang Tailwind CSS:**

**Trước:**

```tsx
style={{ background: "linear-gradient(...)", border: "none" }}
```

**Sau:**

```tsx
className = "!bg-gradient-to-r !from-orange-500 !to-orange-600 !border-none";
```

## 🚀 Best Practices

### **1. Translation Keys:**

- ✅ Sử dụng nested keys: `section.subsection.item`
- ✅ Đặt tên có ý nghĩa và nhất quán
- ✅ Sử dụng camelCase cho keys

### **2. Component Structure:**

- ✅ Import `useTranslation` ở đầu component
- ✅ Sử dụng `t()` function cho tất cả text
- ✅ Tránh hardcoded strings

### **3. Performance:**

- ✅ Sử dụng static imports
- ✅ Tránh dynamic translation loading
- ✅ Optimize bundle size

### **4. Accessibility:**

- ✅ Sử dụng ARIA labels
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

## 📚 Additional Resources

- [i18next Documentation](https://www.i18next.com/)
- [react-i18next Documentation](https://react.i18next.com/)
- [Next.js Internationalization](https://nextjs.org/docs/advanced-features/i18n-routing)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
