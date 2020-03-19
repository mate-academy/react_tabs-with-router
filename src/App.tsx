import React, { FC } from 'react';


import './App.scss';
import {
  Route, Switch, NavLink, RouteComponentProps,
} from 'react-router-dom';
import { Tabs } from './components/Tabs/Tabs';


const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];


const HomePage: FC = () => <h1>Home</h1>;

interface MatchParams {
  tabId: string;
}

type Props = RouteComponentProps<MatchParams>;


const TabsPage: FC<Props> = ({ match }) => {
  return (
    <>
      <h1>Tabs</h1>
      <Tabs tabs={tabs} currentTabId={match.params.tabId} />
    </>
  );
};


const App: FC = () => (

  <div className="App">
    <nav>
      <NavLink to="/" exact className="link" activeClassName="link--active">home</NavLink>
      <NavLink to="/tabs" className="link" activeClassName="link--active">tabs</NavLink>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
