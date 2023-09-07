import { createRoot } from 'react-dom/client';
import { Root } from './Root';

const appBox = document.getElementById('root') as HTMLElement;

createRoot(appBox).render(<Root />);
