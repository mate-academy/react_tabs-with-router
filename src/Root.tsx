import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './Components/Home';
import { Tabs } from './Components/Tabs';
import { Navigate } from 'react-router-dom';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home page="Home page" />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs" element={<Tabs />} />
        <Route path="tabs/:tabId" element={<Tabs />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);
