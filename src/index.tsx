import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

document.querySelector('html')?.classList.add('has-navbar-fixed-top');

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
