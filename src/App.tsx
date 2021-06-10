import React from 'react';
// import Header from './components/Header';
import { Link, Route, Switch } from 'react-router-dom';
import Tabs from './components/Tabs';
import './App.scss';

// let tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

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

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <Link to="/" className="button">Home</Link>
    <Link to="/tabs" className="button">Tabs</Link>
    <Switch>
      <Route
        path="/tabs/:tabId?"
        component={Tabs}
      />
      <Route path="/" exact>
        <h1>Home page</h1>
      </Route>
    </Switch>

  </div>
);

export default App;
