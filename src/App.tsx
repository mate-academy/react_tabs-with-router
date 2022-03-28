import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import tabsFromServer from './tabs.json';
import './App.scss';
import { HomePage } from './components/Home Page/HomePage';
import { TabContent } from './components/Tab Content/TabContent';
import { TabsPage } from './components/Tabs Page/TabsPage';

const App: React.FC = () => {
  const tabs: Tab[] = tabsFromServer;

  return (
    <div className="App">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/tabs">Tabs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs" element={<TabsPage tabs={tabs} />}>
          <Route path=":tabId" element={<TabContent tabs={tabs} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
