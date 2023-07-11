import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/bulma.sass';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { Navbar } from './components/Navbar';
import { Page } from './pages/Page';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <Navbar />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Page title="Home page" />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route
              index
              element={<Page title="Tabs page"><TabsPage tabs={tabs} /></Page>}
            />
            <Route
              path=":tabId"
              element={<Page title="Tabs page"><TabsPage tabs={tabs} /></Page>}
            />
          </Route>
          <Route path="*" element={<Page title="Page not found" />} />
        </Routes>
      </div>
    </div>
  </>
);
