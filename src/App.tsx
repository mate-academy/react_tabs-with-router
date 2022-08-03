import {
  Route,
  Routes,
  NavLink,
  Navigate,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TabsPage } from './components/TabsPage';
import { TabsContent } from './components/TabsContent';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink to="/" className="navbar-item isActive">
              Home
            </NavLink>

            <NavLink to="tabs" className="navbar-item isActive">
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="tabs" element={<TabsPage tabs={tabs} />}>
            <Route index element={<TabsContent tabs={tabs} />} />
            <Route path=":tabId" element={<TabsContent tabs={tabs} />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </>
  );
};
