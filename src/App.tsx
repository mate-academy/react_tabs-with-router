import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/home"
            element={<Navigate to="/" replace />}
          />

          <Route path="/tabs">
            <Route
              index
              element={(<TabsPage tabs={tabs} />)}
            />
            <Route
              path="/tabs:tabId"
              element={(
                <TabsPage
                  tabs={tabs}
                />
              )}
            />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
