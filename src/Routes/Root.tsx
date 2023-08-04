import { HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Tabs } from '../Pages/Tabs';
import { NotFound } from '../Pages/NotFound';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { App } from '../App';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs" element={<Tabs />}>
          <Route path=":tabId?" element={<Tabs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
