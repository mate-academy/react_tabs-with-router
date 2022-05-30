import './App.scss';
import { Route, Switch, Link } from 'react-router-dom';
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

const App = () => (
  <div className="App">
    <nav className="nav">
      <Link to="/" className="nav__link">
        Home
      </Link>
      <Link to="/tabs" className="nav__link">
        Tabs
      </Link>
    </nav>
    <Switch>
      <Route path="/tabs" component={TabsPage} />
      <Route path="/" exact component={HomePage} />
    </Switch>
  </div>
);

export default App;
