import { Navigate, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './Pages/HomePage/HomePage';
import { TabsPage } from './Pages/TabsPage/TabsPage';
import { NavBar } from './components/NavBar/NavBar';
import { PageNotFound } from './Pages/PageNotFound/PageNotFound';

export const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tabs">
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
};
