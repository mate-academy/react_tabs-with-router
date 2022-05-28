import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { Tabs } from './components/Tabs';

const initialTabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC<{}> = () => {
  const [tabs] = useState(initialTabs);

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/tabs/*" element={<Tabs tabs={tabs} />}>
          <Route path=":tabId" element={<Tabs tabs={tabs} />} />
        </Route>

        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
