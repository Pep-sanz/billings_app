'use client';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [propName: string]: ReactNode | string | undefined;
  withMarginTop?: boolean;
}

export default function Container({
  children,
  className = '',
  withMarginTop = true,
  ...others
}: ContainerProps) {
  return (
    <div
      className={`mb-10 ${
        withMarginTop && 'sm:mt-20 md:mt-16'
      } p-4 md:p-8 ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}
