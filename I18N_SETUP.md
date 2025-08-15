# I18N Setup Guide - MAXIUS Landing Page

## Tổng quan

Dự án đã được tích hợp i18next để hỗ trợ đa ngôn ngữ (Tiếng Việt và Tiếng Anh).

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
└── components/
    └── LanguageSwitcher.tsx  # Component chuyển đổi ngôn ngữ
```

## Cách sử dụng

### 1. Sử dụng hook useLanguage

```tsx
import { useLanguage } from "@/hooks";

const MyComponent = () => {
  const { currentLanguage, changeLanguage, isVietnamese, isEnglish } =
    useLanguage();

  return (
    <div>
      <p>Current language: {currentLanguage}</p>
      <button onClick={() => changeLanguage("en")}>Switch to English</button>
      <button onClick={() => changeLanguage("vi")}>Switch to Vietnamese</button>
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

### 3. Thêm bản dịch mới

1. Thêm key vào `src/i18n/locales/vi.json`:

```json
{
  "newSection": {
    "title": "Tiêu đề mới",
    "description": "Mô tả mới"
  }
}
```

2. Thêm bản dịch tiếng Anh vào `src/i18n/locales/en.json`:

```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

3. Sử dụng trong component:

```tsx
const { t } = useTranslation();
return <h1>{t("newSection.title")}</h1>;
```

## Tính năng

### Tự động phát hiện ngôn ngữ

- Ưu tiên: localStorage > navigator > html tag
- Fallback: Tiếng Việt

### Lưu trữ ngôn ngữ

- Ngôn ngữ được lưu vào localStorage
- Tự động khôi phục khi reload trang

### Chuyển đổi ngôn ngữ real-time

- Không cần reload trang
- Tất cả text được cập nhật ngay lập tức

## Các key translation có sẵn

### Navigation

- `navigation.home` - Trang chủ
- `navigation.about` - Giới thiệu
- `navigation.features` - Tính năng
- `navigation.contact` - Liên hệ

### Header

- `header.title` - MAXIUS
- `header.startNow` - Bắt đầu ngay
- `header.language.vi` - VI
- `header.language.en` - EN

### Hero Section

- `hero.tag` - Tag hero
- `hero.title` - Tiêu đề chính
- `hero.subtitle` - Tiêu đề phụ
- `hero.description` - Mô tả
- `hero.cta.primary` - Nút CTA chính
- `hero.cta.secondary` - Nút CTA phụ

### About Section

- `about.tag` - Tag about
- `about.title` - Tiêu đề
- `about.description` - Mô tả
- `about.features.*` - Các tính năng

### Features Section

- `features.tag` - Tag features
- `features.title` - Tiêu đề
- `features.description` - Mô tả
- `features.items.*` - Các item tính năng

### Contact Section

- `contact.tag` - Tag contact
- `contact.title` - Tiêu đề
- `contact.description` - Mô tả
- `contact.info.*` - Thông tin liên hệ
- `contact.form.*` - Form liên hệ

### Footer

- `footer.description` - Mô tả công ty
- `footer.contactInfo` - Thông tin liên hệ
- `footer.followUs` - Theo dõi chúng tôi
- `footer.copyright` - Bản quyền
- `footer.links.*` - Các liên kết
- `footer.legal.*` - Thông tin pháp lý

## Troubleshooting

### Lỗi "Cannot find module './locales/vi.json'"

- Đảm bảo file JSON tồn tại
- Kiểm tra đường dẫn import

### Text không thay đổi khi chuyển ngôn ngữ

- Kiểm tra key translation có đúng không
- Đảm bảo component sử dụng `useTranslation()`
- Kiểm tra console có lỗi gì không

### Ngôn ngữ không được lưu

- Kiểm tra localStorage có hoạt động không
- Đảm bảo không có lỗi JavaScript

## Tích hợp với Next.js

### SSR/SSG

- i18n được khởi tạo ở client-side
- Không ảnh hưởng đến SEO
- Có thể thêm SSR support nếu cần

### Performance

- Chỉ load ngôn ngữ cần thiết
- Sử dụng static imports thay vì HTTP backend
- Lazy loading có thể được thêm nếu cần
