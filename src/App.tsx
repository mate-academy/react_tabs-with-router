import './App.scss';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { TabsPage } from './TabsPage';
import { Home } from './Home';
import { Layout } from './Layout';

type Tab = {
  id: string;
  title: string;
  content: string;
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tabs" element={<TabsPage tabs={tabs} />}>
            <Route
              path=":tabId"
              element={(
                <TabsPage
                  tabs={tabs}
                />
              )}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
