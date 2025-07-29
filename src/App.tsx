import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LayOut } from './components/layout';
import { HomePage } from './components/pages/homePage';
import { TabsPage } from './components/pages/tabsPage';
import { Tab } from './types/Tab';
import { TabContent } from './components/tabContent';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <Routes>
    <Route path="/" element={<LayOut />}>
      <Route
        path="*"
        element={
          <section className="section">
            <div className="container">
              <h1 className="title">Page not found</h1>
            </div>
          </section>
        }
      />
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="tabs" element={<TabsPage tabs={tabs} />}>
        <Route
          index
          element={
            <>
              <div className="block" data-cy="TabContent">
                Please select a tab
              </div>
            </>
          }
        />
        <Route path=":tabId" element={<TabContent t={tabs} />} />
      </Route>
    </Route>
  </Routes>
);
