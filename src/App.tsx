import {
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import { HomePage } from './Components/HomePage';
import { TabsPage } from './Components/TabsPage';
import { TabContent } from './Components/TabContent';
import { Layout } from './Components/Layout';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage tabs={tabs} />}>
          <Route path=":tabId" element={<TabContent tabs={tabs} />} />
        </Route>
      </Route>
    </Routes>
  </div>
);

export default App;
