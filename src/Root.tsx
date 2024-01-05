import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './pages/TabsPage/TabsPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={<h1 className="title">Home page12</h1>}
        />
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsPage />} />
        </Route>
        <Route path="home" element={<h1 className="title">Home page</h1>} />
        <Route path="home" element={<h1 className="title">Home page</h1>} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
