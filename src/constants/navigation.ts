export const NAVIGATION_ITEMS = [
  { key: "hero", label: "Trang chủ", href: "#hero" },
  { key: "about", label: "Giới thiệu", href: "#about" },
  { key: "features", label: "Tính năng", href: "#features" },
  { key: "contact", label: "Liên hệ", href: "#contact" },
  { key: "footer", label: "Thông tin", href: "#footer" },
] as const;

export const SOCIAL_LINKS = [
  { name: "Twitter", href: "#", icon: "twitter", color: "#1DA1F2" },
  { name: "LinkedIn", href: "#", icon: "linkedin", color: "#0077B5" },
  { name: "GitHub", href: "#", icon: "github", color: "#333" },
  { name: "Facebook", href: "#", icon: "facebook", color: "#1877F2" },
] as const;

export const FOOTER_LINKS = [
  {
    key: "products",
    title: "Sản phẩm",
    items: [
      { label: "Tính năng", href: "#features" },
      { label: "Giá cả", href: "#pricing" },
      { label: "Tích hợp", href: "#integrations" },
    ],
  },
  {
    key: "company",
    title: "Công ty",
    items: [
      { label: "Giới thiệu", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Tuyển dụng", href: "#careers" },
    ],
  },
  {
    key: "support",
    title: "Hỗ trợ",
    items: [
      { label: "Trung tâm trợ giúp", href: "#help" },
      { label: "Liên hệ", href: "#contact" },
      { label: "Tài liệu", href: "#docs" },
    ],
  },
] as const;
