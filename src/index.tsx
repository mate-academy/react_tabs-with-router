import { createRoot } from 'react-dom/client';
import { Root } from './Root';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(<Root />);
