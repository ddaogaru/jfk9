'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type ServiceSelectionContextValue = {
  activeService: string;
  setActiveService: (service: string) => void;
};

const ServiceSelectionContext = createContext<ServiceSelectionContextValue | undefined>(undefined);

export function ServiceSelectionProvider({ children }: { children: React.ReactNode }) {
  const [activeService, setActiveService] = useState('boarding');
  const value = useMemo(() => ({ activeService, setActiveService }), [activeService]);

  return (
    <ServiceSelectionContext.Provider value={value}>{children}</ServiceSelectionContext.Provider>
  );
}

export function useServiceSelection() {
  const context = useContext(ServiceSelectionContext);

  if (!context) {
    throw new Error('useServiceSelection must be used within a ServiceSelectionProvider');
  }

  return context;
}
