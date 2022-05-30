import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './components/HomePage';

import './App.scss';
import { TabsPage } from './components/TabsPage';
import { Header } from './components/Header';
import { NotFoundPage } from './components/NotFoundPage';

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

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?">
        <TabsPage
          tabs={tabs}
        />
      </Route>
      <Redirect path="/home" to="/" />
      <NotFoundPage />
    </Switch>
  </div>
);

export default App;
