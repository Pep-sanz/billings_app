import Layout from '@/components/layouts';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
