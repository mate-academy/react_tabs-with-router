import { createRoot } from 'react-dom/client';
import { Root } from './Root';

const roorElement = document.getElementById('root') as HTMLElement;

createRoot(roorElement)
  .render(<Root />);
