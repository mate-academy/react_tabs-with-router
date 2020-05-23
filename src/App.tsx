import React from 'react';
import {
  Route,
  Switch,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Home = () => <h1>Home page here</h1>;

const Tabs = () => {
  return (
    <>
      <h1>Tab is here</h1>
      {tabs.map(item => (
        <React.Fragment key={item.id}>
          <NavLink to={`/tabs/${item.id}`}>
            {item.title}
          </NavLink>
        </React.Fragment>
      ))}
      <Switch>
        {tabs.map(item => (
          <Route
            path={`/tabs/${item.id}`}
            render={() => <p>{item.content}</p>}
            key={item.id}
          />
        ))}
      </Switch>
    </>
  );
};

const App = () => (
  <HashRouter>
    <div className="App">
      <h1>Tabs with router</h1>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/tabs" exact>Tabs</NavLink>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tabs" component={Tabs} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
