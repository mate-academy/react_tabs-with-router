import './App.scss';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { HeadNavigation } from './components/HeadNavigation';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <HeadNavigation />
    <Routes>
      <Route path="/react-tabs-with-router/" element={<Home />} />
      <Route path="/react-tabs-with-router/tabs/*" element={<TabsPage />} />
      <Route path="/react-tabs-with-router/home" element={<Home />} />
      <Route path="/react-tabs-with-router/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
