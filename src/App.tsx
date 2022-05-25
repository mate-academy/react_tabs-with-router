/* eslint-disable no-console */
import { FC } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

import './App.scss';

import { Tabs } from './components/Tabs';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: FC = () => {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/cards">
          <Route
            path=":tabId"
            element={(
              <Tabs
                tabs={tabs}
              />
            )}
          />

          <Route
            path="*"
            element={(
              <Tabs
                tabs={tabs}
              />
            )}
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
