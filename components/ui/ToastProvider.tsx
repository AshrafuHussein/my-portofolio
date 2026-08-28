'use client';

import { GooeyToaster } from 'goey-toast';

export function ToastProvider() {
  return (
    <GooeyToaster
      position="top-left"
      showProgress
    />
  );
}

export default ToastProvider;
