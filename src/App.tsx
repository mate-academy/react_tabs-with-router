import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';

export const App = () => {
  return (
    (
      <>
        <NavBar />

        <div className="section">
          <div className="container">
            <Routes>
              <Route
                path="*"
                element={<NotFoundPage />}
              />

              <Route path="/" element={<h1 className="title">Home page</h1>} />
              <Route path="/home" element={<Navigate to="/" replace />} />

              <Route path="/tabs">
                <Route index element={<TabsPage />} />
                <Route
                  path=":tabId"
                  element={<TabsPage />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </>
    )
  );
};
