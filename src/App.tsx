import './App.scss';
import {
  Link, Route, Routes, Navigate,
} from 'react-router-dom';
import { TabsPage } from './TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <div className="App">
      <h1>Tabs with router</h1>
      <nav>
        <Link to="/">Home page </Link>
        <Link to="/tabs">People page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="tabs/" element={<TabsPage tabs={tabs} />} />
        <Route path="tabs/:tabId" element={<TabsPage tabs={tabs} />} />
      </Routes>
    </div>
  );
};

export default App;
