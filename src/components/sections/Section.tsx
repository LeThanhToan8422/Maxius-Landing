"use client";

import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => {
  const getSectionLabel = (id: string) => {
    switch (id) {
      case "hero":
        return "trang chủ";
      case "about":
        return "giới thiệu";
      case "features":
        return "tính năng";
      case "contact":
        return "liên hệ";
      case "footer":
        return "thông tin liên hệ";
      default:
        return id;
    }
  };

  return (
    <section
      id={id}
      className={`w-full !min-h-screen !snap-start !snap-always !pt-24 !box-border ${className}`}
      role="region"
      aria-label={`Phần ${getSectionLabel(id)}`}>
      {children}
    </section>
  );
};

export default Section;
