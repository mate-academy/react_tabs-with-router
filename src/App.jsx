import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.scss';
import { Tabs } from './components/Tabs';

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

const Home = () => <h1>Home page</h1>;

const App = () => (
  <div className="App">
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/tabs" exact>Tabs</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tabs" exact component={Tabs} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
