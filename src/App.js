import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import {
  HashRouter, Link, Route, Switch,
} from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import TabsPage from './components/tabsPage/TabsPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu widths={2}>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/tabs">
            Tabs
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/tabs" component={TabsPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
