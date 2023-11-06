import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import classNames from 'classnames';
import { TopNav } from './components/TopNav';
import { TabsPage } from './pages/TabsPage';

const getLinkClass = (
  { isActive }: { isActive: boolean },
) => classNames('navbar-item', {
  'is-active': isActive,
});

export const App = () => (
  <>
    <TopNav
      getLinkClass={getLinkClass}
    />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="tabs/:tabId?" element={<TabsPage />} />
        </Routes>
      </div>
    </div>
  </>
);
