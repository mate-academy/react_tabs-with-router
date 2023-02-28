import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { HomePage } from './Components/HomePage';
import { TabsPage } from './Components/TabsPage';
import { PageNotFound } from './Components/PageNotFound';
import tabs from './Data/tabs.json';
import navItems from './Data/navItems.json';

export const App = () => (
  <>
    <NavBar navItems={navItems} />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="/tabs">
            <Route index element={<TabsPage tabs={tabs} />} />
            <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
