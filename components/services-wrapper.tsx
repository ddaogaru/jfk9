'use client';

import { useState } from 'react';
import Services from '@/components/services';

export default function ServicesWrapper({ activeService = 'detection' }: { activeService?: string }) {
  const [currentService, setCurrentService] = useState(activeService);

  return (
    <Services 
      activeService={currentService} 
      setActiveService={setCurrentService} 
    />
  );
}
