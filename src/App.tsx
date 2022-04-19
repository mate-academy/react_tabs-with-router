import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Tabs } from './Tabs';
import { Navigation } from './Nav';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tabs/:id" element={<Tabs tabs={tabs} />} />
      <Route path="/tabs" element={<Tabs tabs={tabs} />} />
    </Routes>
  </div>
);

export default App;
