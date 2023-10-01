import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import cn from 'classnames';
import { Home } from './components/Home';
import { TabsContent } from './components/TabsContent';
import { PageNotFound } from './components/PageNotFound';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const IsLinkActive = ({ isActive }: { isActive: boolean }) => {
  return cn('navbar-item', { 'is-active': isActive });
};

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <ul className="container">
          <li className="navbar-brand">
            <NavLink to="/" className={IsLinkActive}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={IsLinkActive}>
              Tabs
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="section">
        <ul className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tabs">
              <Route index element={<TabsContent tabs={tabs} />} />
              <Route path=":tabId" element={<TabsContent tabs={tabs} />} />
            </Route>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ul>
      </div>
    </>
  );
};
