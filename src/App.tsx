import './App.scss';
import { Route, Routes, NavLink } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/HomePage';

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

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <div className="nav">
          <NavLink className="nav__link" to="/">Home Page</NavLink>
          <NavLink className="nav__link" to="/tabs">Tabs Page</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs" element={<TabsPage tabs={tabs} />} />
        <Route path="/tabs/:tabId" element={<TabsPage tabs={tabs} />} />
      </Routes>

    </div>
  );
};

export default App;
