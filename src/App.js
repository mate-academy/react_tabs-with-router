import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import './App.css';
import TabsPage from './TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabs" exact>Tabs</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/tabs/:id?"
          exact
          render={() => <TabsPage tabs={tabs} />}
        />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
