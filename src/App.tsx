import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import './App.scss';
import cn from 'classnames';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPages';
import { HomePage } from './pages/HomePage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const ActiveLinkClassName = ({ isActive }: { isActive: boolean }) => cn(
  'navbar-item',
  { 'is-active': isActive },
);

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={ActiveLinkClassName}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={ActiveLinkClassName}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs">
              <Route index element={<TabsPage tabs={tabs} />} />
              <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/home"
              element={<Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
