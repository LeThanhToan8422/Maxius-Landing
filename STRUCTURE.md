# MAXIUS Landing Page - Project Structure

## 📁 Directory Structure

```
maxius-landing/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx    # Navigation header
│   │   │   ├── Footer.tsx    # Site footer
│   │   │   └── index.ts      # Layout exports
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.tsx    # Custom button component
│   │   │   ├── Card.tsx      # Custom card component
│   │   │   ├── Animation.tsx # Animation wrapper
│   │   │   └── index.ts      # UI exports
│   │   ├── sections/         # Page sections
│   │   │   ├── Section.tsx   # Section wrapper
│   │   │   └── index.ts      # Section exports
│   │   └── index.ts          # Main component exports
│   ├── hooks/                # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   ├── useIntersectionObserver.ts
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
├── next.config.js           # Next.js config
└── README.md                # Project documentation
```

## 🏗️ Architecture Principles

### **1. Component Organization**

- **Layout Components**: Header, Footer, Navigation
- **UI Components**: Reusable, atomic components
- **Section Components**: Page-specific sections
- **Feature Components**: Business logic components

### **2. File Naming Convention**

- **Components**: PascalCase (e.g., `Header.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScrollPosition.ts`)
- **Utils**: camelCase (e.g., `scrollUtils.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `NAVIGATION_ITEMS`)

### **3. Import/Export Strategy**

- **Barrel Exports**: Use `index.ts` files for clean imports
- **Named Exports**: Prefer named exports over default exports
- **Absolute Imports**: Use `@/` alias for clean import paths

### **4. Code Organization**

- **Single Responsibility**: Each file has one clear purpose
- **Separation of Concerns**: Logic, UI, and data are separated
- **Reusability**: Components are designed to be reusable
- **Maintainability**: Clear structure makes code easy to maintain

## 🔧 Development Workflow

### **Adding New Components**

1. Create component in appropriate directory
2. Add to corresponding `index.ts` file
3. Export from main components index
4. Import where needed

### **Adding New Hooks**

1. Create hook in `src/hooks/`
2. Add to `src/hooks/index.ts`
3. Use in components as needed

### **Adding New Utils**

1. Create utility in `src/utils/`
2. Add to `src/utils/index.ts`
3. Import and use in components

## 📚 Best Practices

### **1. Component Structure**

```typescript
// Component with proper organization
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Card } from "@/components/ui";
import { useScrollPosition } from "@/hooks";
import { NAVIGATION_ITEMS } from "@/constants";

interface ComponentProps {
  // Props interface
}

export const Component: React.FC<ComponentProps> = ({ ...props }) => {
  // Hooks
  const scrollPosition = useScrollPosition();

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
  return <motion.div>{/* JSX */}</motion.div>;
};
```

### **2. Import Organization**

```typescript
// 1. React imports
import { useState, useEffect } from "react";

// 2. Third-party libraries
import { motion } from "framer-motion";
import { Button, Card } from "antd";

// 3. Internal components
import { Header, Footer } from "@/components";

// 4. Hooks and utilities
import { useScrollPosition } from "@/hooks";
import { scrollToSection } from "@/utils";

// 5. Constants and types
import { NAVIGATION_ITEMS } from "@/constants";
import { ComponentProps } from "@/types";
```

### **3. File Structure Standards**

- **One component per file**
- **Clear file names**
- **Consistent directory structure**
- **Proper exports and imports**

## 🚀 Benefits of This Structure

1. **Scalability**: Easy to add new features and components
2. **Maintainability**: Clear organization makes code easy to find and modify
3. **Reusability**: Components are properly separated and reusable
4. **Team Collaboration**: Consistent structure helps team members work together
5. **Testing**: Organized code is easier to test
6. **Performance**: Better tree-shaking and code splitting
7. **Developer Experience**: Clean imports and clear organization

## 📝 Next Steps

1. **Review existing components** and ensure they follow the new structure
2. **Update imports** throughout the codebase
3. **Add missing components** to appropriate directories
4. **Create additional utilities** as needed
5. **Document component APIs** and usage examples
