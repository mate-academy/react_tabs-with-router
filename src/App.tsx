import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TabPage } from './Components/TabPage';
import { MainNav } from './Components/MainNav';

export const App = () => (
  <>
    <MainNav />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="tabs">
            <Route index element={<TabPage />} />
            <Route path=":tabId" element={<TabPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
