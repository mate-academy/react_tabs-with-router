import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { TabPage } from './TabPage/TabPages';
import { Tab } from './types/Tab';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { HomePage } from './HomePage/HomePage';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <Navigation />
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route
            path="tabs"
            element={(
              <>
                <h1 className="title">Tabs page</h1>
                <Outlet />
              </>
            )}
          >
            <Route index element={<TabPage tabs={tabs} />} />
            <Route path=":tabId" element={<TabPage tabs={tabs} />} />
          </Route>
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </div>
    </div>
  </>
);
