import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Styles
import './App.scss';
// Components
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { TabContent } from './components/TabContent';
import { TabsPage } from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabContent tabs={tabs} />} />
      </Route>
    </Routes>
  </div>
);

export default App;
