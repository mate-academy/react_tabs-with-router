import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { HomePage } from './Pages/HomePage';
import { TabsPage } from './Pages/TabsPage';
import { NotFoundPage } from './Pages/NotFoundPage';
dfsd
export const App = () => {
  return (
    <html
      className="has-navbar-fixed-top"
      lang="en"
    >
      <body>
        <Navigation />

        <div className="section">
          <div className="container">

            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />

              <Route path="tabs">
                <Route index element={<TabsPage />} />
                <Route path=":tabId" element={<TabsPage />} />
              </Route>

              <Route
                path="*"
                element={<NotFoundPage />}
              />

              <Route
                path="home"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </div>
        </div>
      </body>
    </html>
  );
};
