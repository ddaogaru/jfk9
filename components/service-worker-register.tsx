"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const handleLoad = () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then(() => {
            // Registration successful
          })
          .catch(() => {
            // Registration failed
          });
      };

      window.addEventListener("load", handleLoad);
      
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return null;
}
