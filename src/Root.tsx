import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { App } from './App';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId?" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
