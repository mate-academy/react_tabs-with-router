import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';

import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <>
  <div className="App">
    <h1>Tabs with router</h1>
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/tabs'>Tabs</NavLink>
      </li>
    </ul>
  </div>
  <Route path="/" exact component={Home}/>
  <Route
    exact
    path="/tabs/:tabId?"
    render={({ match }) => {
      console.log(match);
      return (
    <TabsPage tabId={match.params.tabId} tabs={tabs}
      />)}
    }
    />
  </>
);

const Home = () => <h1>Home page</h1>;

export default App;
