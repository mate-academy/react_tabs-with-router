import { Redirect, Route, Switch } from 'react-router-dom';
import 'bulma';
import './App.scss';
import { Header, NotFoundPage, TabsPage } from './components';
import { Tab } from './utils/types';

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

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <Header />

    <section className="section">
      <div className="container">
        <h1 className="title">
          Mate Academy
        </h1>

        <Switch>
          <Route path="/" exact>
            <h2 className="subtitle">Home page</h2>
          </Route>

          <Route path="/tabs/:tabId?">
            <TabsPage
              tabs={tabsFromServer}
            />
          </Route>

          <Redirect to="/" path="/home" />

          <NotFoundPage />
        </Switch>
      </div>
    </section>
  </div>
);

export default App;
