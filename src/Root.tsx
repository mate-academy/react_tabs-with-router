import { HashRouter, Route, Routes } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { App } from './App';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />

        <Route path="/" element={<App />}>
          <Route index element={<h1 className="title">Home page</h1>} />
          <Route path="tabs/:tabId?" element={<TabsPage />} />
        </Route>

      </Routes>
    </HashRouter>
  );
};
