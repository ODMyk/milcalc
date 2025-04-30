import React from 'react';

export function Tab<T extends {label?: string; id: string}>({
  children,
}: React.PropsWithChildren<T>) {
  return <>{children}</>;
}
