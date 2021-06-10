import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
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

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <Navigation />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
      <Redirect path="/home" to="/" />
    </Switch>
  </div>
);

export default App;
