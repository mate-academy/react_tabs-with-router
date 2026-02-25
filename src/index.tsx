import { createRoot } from 'react-dom/client';
// HashRouter usa "#" na URL (ex: /#/tabs) — ideal para deploy em GitHub Pages
// pois não requer configuração de servidor para rotas do lado do cliente
import { HashRouter } from 'react-router-dom';
import { App } from './App';

// createRoot: API do React 18 para montar a árvore de componentes no DOM
createRoot(document.getElementById('root') as HTMLElement).render(
  // HashRouter envolve toda a aplicação, habilitando navegação por rotas
  <HashRouter>
    <App />
  </HashRouter>,
);
