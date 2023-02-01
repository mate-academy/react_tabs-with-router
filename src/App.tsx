import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { PageNotFound } from './components/PageBotFound/PageNotFound';

export const App = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
