import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './Root';

document.documentElement.classList.add('has-navbar-fixed-top');
createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
