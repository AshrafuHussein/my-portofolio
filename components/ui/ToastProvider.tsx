'use client';

import { GooeyToaster } from 'goey-toast';

export function ToastProvider() {
  return (
    <GooeyToaster
      position="bottom-right"
      theme="dark"
      toastOptions={{
        className: 'bg-surface-elevated text-slate-100 border border-brand-500/30 shadow-glow font-sans',
      }}
    />
  );
}
