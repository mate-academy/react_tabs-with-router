import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainNav } from './components/MainNav';

import { Home } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App:React.FC = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <MainNav />

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          />
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="tabs">
            <Route index element={<TabsPage tabs={tabs} />} />
            <Route path=":id" element={<TabsPage tabs={tabs} />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
