import { createRoot } from 'react-dom/client';
import { Root } from './Root';

const mainPage = document.getElementById('root') as HTMLElement;

createRoot(mainPage).render(<Root />);
