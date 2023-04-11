import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { TabsPage } from './TabsPage/TabsPage';
import { PageNavigation } from './PageNavLink/PageNavLink';
import { HomePage } from './HomePage/HomePage';
import { PageNotFound } from './PageNotFound/PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <PageNavigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            path="/tabs"
            element={(
              <>
                <h1 className="title">Tabs page</h1>
                <Outlet />
              </>
            )}
          >
            <Route index element={<TabsPage tabs={tabs} />} />
            <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>

  </>
);
