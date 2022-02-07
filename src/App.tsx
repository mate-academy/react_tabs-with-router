import { NavLink, Route, Switch } from 'react-router-dom';
import './App.scss';
import { TabsPage } from './TabsPage';

const App = () => (
  <div className="App">
    <nav className="nav">
      <NavLink activeClassName="is-active" to="/" exact>Home Page</NavLink>
      <NavLink activeClassName="is-active" to="/tabs">Tabs Page</NavLink>
    </nav>
    <Switch>
      <Route path="/" exact>
        <h1 className="title">Home Page</h1>
      </Route>
      <Route path="/tabs/:tabId?" component={TabsPage} />
    </Switch>
  </div>
);

export default App;
