import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path=":currentId"
          element={<h1 className="title">Page not found</h1>}
        />
        <Route index element={<h1 className="title">Home page</h1>}></Route>
        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
          <Route
            path="*"
            element={
              <div className="block" data-cy="TabContent">
                Please select a tab
              </div>
            }
          />
        </Route>
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        ></Route>
      </Route>
    </Routes>
  </HashRouter>,
);
