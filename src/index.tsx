import { createRoot } from 'react-dom/client';
import { App } from './App';

document.documentElement.classList.add('has-navbar-fixed-top');

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
