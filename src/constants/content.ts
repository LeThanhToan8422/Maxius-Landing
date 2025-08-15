export const COMPANY_INFO = {
  name: "MAXIUS",
  description:
    "Maxius là công ty công nghệ tiên tiến chuyên cung cấp các giải pháp số hóa toàn diện cho doanh nghiệp.",
  address:
    "5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea",
  phone: "02. 851. 2662",
  fax: "02. 851. 2655",
  email: "support@maxius.io",
} as const;

export const FEATURE_CARDS = [
  {
    icon: "rocket",
    title: "Tốc độ nhanh chóng",
    description: "Giải pháp được tối ưu hóa để đạt hiệu suất cao nhất",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    color: "text-blue-600",
  },
  {
    icon: "shield",
    title: "Bảo mật tuyệt đối",
    description: "Hệ thống bảo mật đa lớp, đảm bảo an toàn dữ liệu",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    color: "text-green-600",
  },
  {
    icon: "users",
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ hỗ trợ chuyên nghiệp sẵn sàng hỗ trợ mọi lúc",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    color: "text-purple-600",
  },
] as const;

export const CONTACT_FORM_FIELDS = [
  {
    name: "name",
    label: "Họ và tên",
    placeholder: "Nhập họ và tên của bạn",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Nhập email của bạn",
    required: true,
  },
  {
    name: "message",
    label: "Tin nhắn",
    placeholder: "Nhập tin nhắn của bạn",
    required: true,
    type: "textarea",
  },
] as const;
