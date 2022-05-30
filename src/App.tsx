import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage/HomePage';
import { TabsPage } from './Components/TabsPage/TabsPage';
import { Nav } from './Components/Nav/Nav';
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <Nav />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tabs" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
