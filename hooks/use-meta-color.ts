import * as React from 'react';
import { META_THEME_COLORS } from '@/config/site';

export function useMetaColor() {
  const metaColor = React.useMemo(() => {
    return META_THEME_COLORS.light;
  }, []);

  const setMetaColor = React.useCallback((color: string) => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
  }, []);

  return {
    metaColor,
    setMetaColor,
  };
}
