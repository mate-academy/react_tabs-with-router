import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Homepage } from './components/Homepage';
import { Navigation } from './components/Navigation';
import { TabsPage } from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <Navigation />

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tabs/*" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>
    </Routes>
  </div>
);

export default App;
