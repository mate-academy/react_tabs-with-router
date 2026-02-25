// NavLink: link de navegação que aplica classe ativa automaticamente
// Navigate: componente para redirecionamento declarativo de rotas
// Route/Routes: define as rotas da aplicação
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
// classnames: utilitário para montar strings de className condicionalmente
import cn from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

// Páginas da aplicação — cada uma é renderizada por uma rota específica
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => (
  <>
    {/* Requer <html class="has-navbar-fixed-top"> no index.html */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {/*
           * NavLink aplica automaticamente a classe ativa quando a rota combina.
           * "end" garante que "/" só fique ativo na rota exata (não em /tabs).
           * A função className recebe { isActive } e usa classnames (cn)
           * para adicionar 'is-active' condicionalmente.
           */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn('navbar-item', { 'is-active': isActive })
            }
          >
            Home
          </NavLink>

          {/*
           * Sem "end", /tabs fica ativo tanto em /tabs quanto em /tabs/:tabId,
           * que é o comportamento desejado para sub-rotas de tabs.
           */}
          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              cn('navbar-item', { 'is-active': isActive })
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<HomePage />} />

          {/* Redireciona /home para / usando Navigate com replace */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/*
           * Rotas aninhadas para tabs:
           * - /tabs (index) → mostra TabsPage sem nenhuma aba selecionada
           * - /tabs/:tabId → mostra TabsPage com a aba correspondente ativa
           */}
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          {/* Rota catch-all: qualquer URL não reconhecida mostra "Page not found" */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
