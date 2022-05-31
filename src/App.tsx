import './App.scss';
import { Routes, Route } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './components/HomePage/Homepage';
import { Tabs } from './components/Tabs/Tabs';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { tabs } from './tabs';

const App = () => (
  <div className="App">
    <Navigation />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs/" element={<Tabs tabs={tabs} />}>
        <Route path=":tabId" element={<Tabs tabs={tabs} />} />
      </Route>
      <Route />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
