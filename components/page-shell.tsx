"use client";

import type { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div aria-hidden className="h-[var(--header-height)] shrink-0" />
      <main id="main" role="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
