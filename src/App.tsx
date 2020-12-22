import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import { Header } from './components/Header';
import { Home } from './components/Home';
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

const App = () => (
  <div className="App">
    <Header />

    <Switch>
      <Route path="/tabs">
        <Tabs />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </div>
);

export default App;
