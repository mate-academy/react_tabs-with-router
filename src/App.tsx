import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './component/Header/Header';
import { PageNotFound } from './component/PageNotFound';
import { HomePage } from './component/HomePage';
import { TabsPage } from './component/TabsPage';

export const App = () => (
  <>
    <Header />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  </>
);
