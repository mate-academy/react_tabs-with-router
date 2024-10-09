// import { createRoot } from 'react-dom/client';
// import { HashRouter } from 'react-router-dom';
// import { App } from './App';

// createRoot(document.getElementById('root') as HTMLElement).render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
// );


import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

import { TabsPage } from './components/TabsPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>,
);
