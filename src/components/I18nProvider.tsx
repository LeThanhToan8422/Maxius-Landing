"use client";

import React from "react";
import "@/i18n";

type Props = { children: React.ReactNode };

const I18nProvider: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default I18nProvider;
