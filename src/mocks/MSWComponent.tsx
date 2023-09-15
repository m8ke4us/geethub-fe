'use client';

import { useEffect, useState } from 'react';

import { setupMSW } from '@/mocks/setup';

import type { PropsWithChildren } from 'react';

const enabled =
  process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

function MSWComponent({ children }: PropsWithChildren) {
  const [isInitialized, setIsInitialized] = useState(!enabled);

  const init = async () => {
    await setupMSW();
    setIsInitialized(true);
  };

  useEffect(() => {
    !isInitialized && init();
  }, [isInitialized]);

  if (!isInitialized) {
    return null;
  }

  return <>{children}</>;
}

export default MSWComponent;
