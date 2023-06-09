import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Tabs } from './component/Tabs';
import { MainNavLink } from './component/MainNavLink';

export const App = () => (
  <>
    <MainNavLink />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="tabs">
            <Route index element={<Tabs tabs={[]} />} />
            <Route path=":tabId" element={<Tabs tabs={[]} />} />
          </Route>

          <Route index element={<h1 className="title">Home Page</h1>} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </div>
  </>
);
