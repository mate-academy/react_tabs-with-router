import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { TabsPage } from './TabsPage';
import { Navigation } from './Navigation';
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
  <HashRouter>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/tabs/:tabId" component={TabsPage} />
        <Route path="/" exact>
          <h1>Home Page</h1>
        </Route>

        <h1>not found</h1>
      </Switch>
    </div>
  </HashRouter>
);

export default App;
