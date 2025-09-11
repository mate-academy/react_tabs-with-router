import { createRoot } from 'react-dom/client';
import { GlobalRouter } from './router/AppRouter';
import React from 'react';

createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalRouter />,
);
