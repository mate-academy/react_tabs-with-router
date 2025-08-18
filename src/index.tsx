import { createRoot } from 'react-dom/client';
import { Router } from './routes/Router';

createRoot(document.getElementById('root') as HTMLElement).render(<Router />);
