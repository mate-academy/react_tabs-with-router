import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLinkBar } from './Components/NavLinkBar/NavLinkBar.tsx';
import { PageNotFound } from './Components/PageNotFound';
import { HomePage } from './Components/HomePage';
import { TabsPage } from './Components/TabsPage';

export const App = () => (
  <>
    <NavLinkBar />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
