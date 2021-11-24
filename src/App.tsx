import './App.scss';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { HeadNavigation } from './components/HeadNavigation';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

const App = () => (
  <HashRouter>
    <HeadNavigation />
    <Routes>
      <Route path="/react_tabs-with-router/" element={<Home />} />
      <Route path="/react_tabs-with-router/tabs/*" element={<TabsPage />} />
      <Route path="/react_tabs-with-router/home" element={<Home />} />
      <Route path="/react_tabs-with-router/*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
