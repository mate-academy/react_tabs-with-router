import './App.scss';
import {
  Link, Redirect, Route, Switch,
} from 'react-router-dom';
import { useState } from 'react';
import { HomePage } from './Components/HomePage/HomePage';
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage';
import { TabsPage } from './Components/TabsPage/TabsPage';

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

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0] || {});

  const onTabSelected = (newTab: Tab) => {
    if (newTab.id !== selectedTab.id) {
      setSelectedTab(newTab);
    }
  };

  return (
    <div className="App">
      <Link to="/" className="nav__link">
        Home page
      </Link>
      <Link to="/tabs" className="nav__link">
        Tabs
      </Link>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabs">
          <TabsPage
            tabs={tabs}
            selectedTabId={selectedTab.id}
            tabChangeMethod={onTabSelected}
          />
        </Route>
        <Redirect path="/home" to="/" />
        <NotFoundPage />
      </Switch>
    </div>
  );
};

export default App;
