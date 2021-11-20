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
      <Route path="/" element={<Home />} />
      <Route path="/tabs/*" element={<TabsPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
