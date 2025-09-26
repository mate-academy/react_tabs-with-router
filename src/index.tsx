import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';

const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
