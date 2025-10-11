"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";




type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export default function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [hasError] = useState(false);

  // Simulate error boundary for demo; in real use, wrap with try/catch or use error boundary lib
  if (hasError) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="flex min-h-[200px] w-full items-center justify-center rounded-lg border border-destructive/20 bg-destructive/10 p-8">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-destructive">Something went wrong</h3>
          <p className="text-sm text-muted-foreground max-w-md">This component encountered an error. Please refresh the page or try again later.</p>
          <Button variant="default" className="mt-4 px-4 py-2" onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}