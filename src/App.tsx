import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <h1 className="has-text-centered">Tabs with router</h1>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tabs/:tabId" element={<TabsPage tabs={tabs} />} />
      <Route path="/tabs" element={<TabsPage tabs={tabs} />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </div>
);

export default App;
