import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../Components/Home';
import { TabsPages } from '../Components/TabsPages';
import { App } from '../App';

export const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="tabs">
        <Route index element={<TabsPages />} />
        <Route path=":tabId" element={<TabsPages />} />
      </Route>

      <Route
        path="*"
        element={
          <div className="section">
            <div className="container">
              <h1 className="title">Page not found</h1>
            </div>
          </div>
        }
      />
    </Route>
  </Routes>
);
