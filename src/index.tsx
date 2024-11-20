import { createRoot } from 'react-dom/client';
import { Root } from './Root';

const conteiner = document.getElementById('root') as HTMLElement;

createRoot(conteiner).render(<Root />);
