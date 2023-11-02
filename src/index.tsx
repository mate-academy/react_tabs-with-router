import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import { Root } from './Root';

const container = document.getElementById('root') as HTMLElement;

createRoot(container)
  .render(<Root />);
