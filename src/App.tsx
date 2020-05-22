import React, { useMemo } from 'react';
import {
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';

import './App.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/tabs">Tabs Page</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <h2>Home</h2>
        </Route>
        <Route
          path="/tabs/:id?"
          render={({ match }) => (
            <Tabs tabs={tabs} currentTab={match.params.id} />
          )}
        />
      </Switch>
    </header>
  </div>
);

type Props = {
  tabs: Tab[];
  currentTab: string;
};

const Tabs: React.FC<Props> = ({ tabs, currentTab }) => {
  const index = useMemo(() => {
    return tabs.findIndex(tab => tab.id === currentTab);
  }, [tabs, currentTab]);

  const defaultTabId = tabs[0].id;

  if (!currentTab) {
    return <Redirect to={`/tabs/${defaultTabId}`} />;
  }

  return (
    <>
      <h2>Tabs</h2>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <section>{tabs[index].content}</section>
    </>
  );
};

export default App;
