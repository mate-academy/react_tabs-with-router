import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation/index';
import { HomePage } from './components/HomePage/index';
import { TabsPage } from './components/TabsPage/index';

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

const App = () => (
  <div className="App">
    <MainNavigation />
    <Switch>
      <Route
        path="/"
        exact
      >
        <HomePage />
      </Route>
      <Route
        path="/tabs/:tabId?"
        exact
      >
        <TabsPage
          tabs={tabs}
        />
      </Route>
    </Switch>
  </div>
);

export default App;
