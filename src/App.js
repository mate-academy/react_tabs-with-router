import React from 'react';
import './App.css';
import { NavLink, Switch, Route} from 'react-router-dom';
import Tabs from './components/tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <nav>
      <div className="linksContainer">
        <NavLink to="/" exact>Home page</NavLink>
        <NavLink to="/tabs" exact>Tab page</NavLink>
      </div>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?" exact render={() => <Tabs tabs={tabs} currentTabId="tab-2" />} />
    </Switch>
  </div>
);

const HomePage = () => <h1>Home page</h1>;

export default App;
