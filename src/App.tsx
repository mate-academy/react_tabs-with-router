import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';
import { Navigation } from './components/Navigation';

export const App = () => {
  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/tabs/:tabId?" element={<TabsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
