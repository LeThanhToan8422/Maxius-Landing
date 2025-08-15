export const APP_CONFIG = {
  name: "MAXIUS Landing Page",
  version: "1.0.0",
  description: "Landing page for MAXIUS technology company",
  author: "MAXIUS Team",
  keywords: [
    "technology",
    "digital transformation",
    "business solutions",
    "MAXIUS",
  ],
  url: "https://maxius.io",
} as const;

export const ANIMATION_CONFIG = {
  duration: 0.5,
  delay: 0.1,
  easing: [0.25, 0.46, 0.45, 0.94] as const,
} as const;

export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const SCROLL_CONFIG = {
  headerHeight: 96,
  smoothBehavior: "smooth" as const,
  snapType: "y mandatory" as const,
} as const;
