import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { Root } from './routes/Root';

createRoot(document.getElementById('root') as HTMLElement).render(
<Root />
);
