# MAXIUS Landing Page - Project Structure

## 📁 Directory Structure

```
maxius-landing/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout với i18n provider
│   │   └── page.tsx           # Home page với đa ngôn ngữ
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx    # Navigation header với language switcher
│   │   │   ├── Footer.tsx    # Site footer với đa ngôn ngữ
│   │   │   └── index.ts      # Layout exports
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.tsx    # Custom button component
│   │   │   ├── Card.tsx      # Custom card component
│   │   │   ├── Animation.tsx # Animation wrapper
│   │   │   ├── LanguageSwitcher.tsx # Language toggle component
│   │   │   └── index.ts      # UI exports
│   │   ├── sections/         # Page sections
│   │   │   ├── Section.tsx   # Section wrapper
│   │   │   └── index.ts      # Section exports
│   │   └── index.ts          # Main component exports
│   ├── hooks/                # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── useLanguage.ts    # Language management hook
│   │   └── index.ts
│   ├── utils/                # Utility functions
│   │   ├── scroll.ts         # Scroll utilities
│   │   ├── validation.ts     # Form validation
│   │   ├── formatting.ts     # Data formatting
│   │   └── index.ts
│   ├── constants/            # Application constants
│   │   ├── navigation.ts     # Navigation items
│   │   ├── content.ts        # Content data
│   │   ├── config.ts         # App configuration
│   │   └── index.ts
│   ├── i18n/                 # Internationalization
│   │   ├── index.ts          # i18n configuration
│   │   └── locales/          # Translation files
│   │       ├── vi.json       # Vietnamese translations
│   │       └── en.json       # English translations
│   ├── styles/               # Additional styles
│   │   └── components.css    # Component styles
│   ├── lib/                  # Library configurations
│   │   ├── framer-motion.ts  # Framer Motion configs
│   │   ├── antd-config.ts    # Ant Design theme
│   │   └── index.ts
│   └── types/                # TypeScript type definitions
│       └── index.ts
├── public/                   # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind CSS config
├── next.config.ts           # Next.js config (TypeScript)
└── README.md                # Project documentation
```

## 🏗️ Architecture Principles

### **1. Component Organization**

- **Layout Components**: Header, Footer, Navigation với language switcher
- **UI Components**: Reusable, atomic components với Tailwind CSS
- **Section Components**: Page-specific sections với animations
- **Feature Components**: Business logic components

### **2. File Naming Convention**

- **Components**: PascalCase (e.g., `Header.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScrollPosition.ts`)
- **Utils**: camelCase (e.g., `scrollUtils.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `NAVIGATION_ITEMS`)
- **i18n**: camelCase (e.g., `vi.json`, `en.json`)

### **3. Import/Export Strategy**

- **Barrel Exports**: Use `index.ts` files for clean imports
- **Named Exports**: Prefer named exports over default exports
- **Absolute Imports**: Use `@/` alias for clean import paths
- **i18n Imports**: Static imports cho performance

### **4. Code Organization**

- **Single Responsibility**: Each file has one clear purpose
- **Separation of Concerns**: Logic, UI, and data are separated
- **Reusability**: Components are designed to be reusable
- **Maintainability**: Clear structure makes code easy to maintain
- **Internationalization**: All text content is externalized

## 🌐 Internationalization (i18n)

### **Structure:**

```
src/i18n/
├── index.ts          # i18n configuration
└── locales/
    ├── vi.json       # Vietnamese translations
    └── en.json       # English translations
```

### **Translation Keys:**

- **Navigation**: `navigation.home`, `navigation.about`, etc.
- **Page Content**: `hero.title`, `about.description`, etc.
- **Forms**: `contact.form.name`, `contact.form.validation.*`
- **Footer**: `footer.description`, `footer.links.*`

### **Usage:**

```typescript
import { useTranslation } from "react-i18next";

const Component = () => {
  const { t } = useTranslation();
  return <h1>{t("hero.title")}</h1>;
};
```

## 🎨 Styling Architecture

### **Tailwind CSS với `!important`:**

- **Utility-first approach** với Tailwind CSS
- **`!important` utilities** để override Ant Design styles
- **Consistent design system** với unified styling
- **Responsive design** cho mọi thiết bị

### **Style Organization:**

```typescript
// ✅ Good: Tailwind CSS với !important
className="!bg-gradient-to-r !from-orange-500 !to-orange-600 !border-none !rounded-lg"

// ❌ Avoid: Inline styles
style={{ background: "linear-gradient(...)", border: "none" }}
```

## 🔧 Development Workflow

### **Adding New Components**

1. Create component in appropriate directory
2. Add to corresponding `index.ts` file
3. Export from main components index
4. Import where needed
5. Add translations if needed

### **Adding New Hooks**

1. Create hook in `src/hooks/`
2. Add to `src/hooks/index.ts`
3. Use in components as needed

### **Adding New Utils**

1. Create utility in `src/utils/`
2. Add to `src/utils/index.ts`
3. Import and use in components

### **Adding New Translations**

1. Add translation keys to `src/i18n/locales/vi.json`
2. Add corresponding keys to `src/i18n/locales/en.json`
3. Use `t("key")` in components

## 📚 Best Practices

### **1. Component Structure**

```typescript
// Component với i18n và proper organization
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button, Card } from "@/components/ui";
import { useScrollPosition, useLanguage } from "@/hooks";
import { NAVIGATION_ITEMS } from "@/constants";

interface ComponentProps {
  // Props interface
}

export const Component: React.FC<ComponentProps> = ({ ...props }) => {
  // i18n
  const { t } = useTranslation();

  // Custom hooks
  const scrollPosition = useScrollPosition();
  const { currentLanguage, changeLanguage } = useLanguage();

  // State
  const [state, setState] = useState();

  // Effects
  useEffect(() => {
    // Effect logic
  }, []);

  // Handlers
  const handleClick = () => {
    // Handler logic
  };

  // Render
  return (
    <motion.div className="!bg-white !rounded-lg">
      <h1>{t("component.title")}</h1>
      {/* JSX */}
    </motion.div>
  );
};
```

### **2. Import Organization**

```typescript
// 1. React imports
import { useState, useEffect } from "react";

// 2. Third-party libraries
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button, Card } from "antd";

// 3. Internal components
import { Header, Footer } from "@/components";
import { LanguageSwitcher } from "@/components/ui";

// 4. Hooks and utilities
import { useScrollPosition, useLanguage } from "@/hooks";
import { scrollToSection } from "@/utils";

// 5. Constants and types
import { NAVIGATION_ITEMS } from "@/constants";
import { ComponentProps } from "@/types";
```

### **3. i18n Best Practices**

```typescript
// ✅ Good: Use translation keys
const { t } = useTranslation();
return <h1>{t("hero.title")}</h1>;

// ❌ Avoid: Hardcoded text
return <h1>Welcome to Maxius</h1>;

// ✅ Good: Nested keys
return <p>{t("contact.form.validation.emailRequired")}</p>;

// ✅ Good: Dynamic values
return <p>{t("welcome.message", { name: userName })}</p>;
```

### **4. Styling Best Practices**

```typescript
// ✅ Good: Tailwind CSS với !important
className="!bg-gradient-to-r !from-orange-500 !to-orange-600 !border-none !rounded-lg !h-12 !px-6"

// ✅ Good: Responsive design
className="!text-lg md:!text-xl lg:!text-2xl"

// ✅ Good: Hover effects
className="hover:!bg-orange-600 transition-all duration-300"

// ❌ Avoid: Inline styles
style={{ background: "linear-gradient(...)", height: "48px" }}
```

## 🚀 Benefits of This Structure

1. **Scalability**: Easy to add new features and components
2. **Maintainability**: Clear organization makes code easy to find and modify
3. **Reusability**: Components are properly separated and reusable
4. **Internationalization**: Built-in support for multiple languages
5. **Team Collaboration**: Consistent structure helps team members work together
6. **Testing**: Organized code is easier to test
7. **Performance**: Better tree-shaking, code splitting, and i18n optimization
8. **Developer Experience**: Clean imports, clear organization, and unified styling
9. **Accessibility**: Built-in ARIA support and screen reader compatibility

## 📝 Next Steps

1. **Review existing components** and ensure they follow the new structure
2. **Update imports** throughout the codebase
3. **Add missing translations** for all text content
4. **Convert remaining inline styles** to Tailwind CSS
5. **Create additional utilities** as needed
6. **Document component APIs** and usage examples
7. **Add language switcher** to all pages if needed
8. **Optimize i18n performance** with static imports
