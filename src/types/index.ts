// Navigation types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
}

// Section types
export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

// Hero section types
export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc?: string;
  imageAlt?: string;
}

// About section types
export interface AboutProps {
  title: string;
  description: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

// Features section types
export interface Feature {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export interface FeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

// Contact section types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactProps {
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  address?: string;
}

// Footer types
export interface FooterProps {
  companyName: string;
  description: string;
  links: {
    title: string;
    items: NavItem[];
  }[];
  socialLinks: Array<{
    name: string;
    href: string;
    icon: string;
  }>;
  copyright: string;
}

// Animation types
export interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  repeat?: boolean;
}

// Button types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

// Card types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  shadow?: boolean;
}
