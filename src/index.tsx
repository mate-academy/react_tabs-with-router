import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/extensions
import { Root } from './router/Root';

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
