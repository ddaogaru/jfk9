'use client';

import Footer from '@/components/footer';
import { useServiceSelection } from '@/components/service-selection-provider';

export default function ConnectedFooter() {
  const { setActiveService } = useServiceSelection();

  return <Footer setActiveService={setActiveService} />;
}
