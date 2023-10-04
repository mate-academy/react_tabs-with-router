import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { TabsPage } from './components/TabsPage/TabsPage';
import { HomePage } from './components/HomePage/HomePage';

export const App = () => {
  return (
    <>
      <Home />
      <div className="section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>

      </div>
    </>
  );
};
