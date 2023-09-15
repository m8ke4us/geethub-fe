import { Inter } from 'next/font/google';
import React from 'react';

import MSWComponent from '@/mocks/MSWComponent';

import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HELLO GEETHUB',
  description: '친구들 커밋 순위 보기',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent>{children}</MSWComponent>
      </body>
    </html>
  );
}
