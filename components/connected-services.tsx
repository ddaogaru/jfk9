'use client';

import Services from '@/components/services';
import { useServiceSelection } from '@/components/service-selection-provider';

export default function ConnectedServices() {
  const { activeService, setActiveService } = useServiceSelection();

  return (
    <Services activeService={activeService} setActiveService={setActiveService} />
  );
}
