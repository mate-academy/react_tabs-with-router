// import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import { HomePage } from './Components/HomePage';
import { Navigation } from './Components/Navigarion';
import { Tabs } from './Components/Tabs';

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

const tabs: Tabs[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/tabs/:tabId?">
          <Tabs tabs={tabs} />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
