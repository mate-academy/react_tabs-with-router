import './App.scss';
import {
  NavLink, Redirect, Route, Switch,
} from 'react-router-dom';
import { HomePage } from './Components/HomePage/HomePage';
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage';
import { TabsPage } from './Components/TabsPage/TabsPage';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <NavLink
        to="/"
        exact
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Home page
      </NavLink>

      <NavLink
        to="/tabs"
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Tabs
      </NavLink>

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
};

export default App;
