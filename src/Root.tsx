import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/home';
import { Tabs } from './components/tabs';
import { NotFound } from './components/notFound';

export const Root: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId?" element={<Tabs />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};
