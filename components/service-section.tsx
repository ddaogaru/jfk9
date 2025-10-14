'use client';

import { useState } from 'react';
import Services from '@/components/services';
import Footer from '@/components/footer';

export default function ServiceSection() {
  const [activeService, setActiveService] = useState('boarding');

  return (
    <>
      <Services activeService={activeService} setActiveService={setActiveService} />
      <Footer setActiveService={setActiveService} />
    </>
  );
}
