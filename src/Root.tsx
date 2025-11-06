import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomeSection } from './components/HomePage/HomePage';
import { Tabs } from './components/Tabs/Tabs';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomeSection />} />
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route path="home" element={<Navigate to={'..'} />} />
        <Route path="*" element={<p className="title">Page not found</p>} />
      </Route>
    </Routes>
  </HashRouter>
);
