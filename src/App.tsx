import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { TabsPage } from './Components/TabsPage/TabsPage';

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />

          <Route path="/tabs">
            <Route
              index
              element={<TabsPage />}
            />

            <Route
              path=":tabId"
              element={<TabsPage />}
            />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />

          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  </>
);
