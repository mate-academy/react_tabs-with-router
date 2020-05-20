import React from 'react';
import {
  Route,
  NavLink,
  RouteComponentProps,
} from 'react-router-dom';

import './App.css';

interface Tab {
  id: string;
  title: string;
  content: string;
}

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const HomePage = () => (
  <h2>HomePage</h2>
);

type Params = { tabId: string };

const TabsPage: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const noTab = '';
  let tempTab: Tab | undefined;

  return (
    <div>
      <Route
        path="/tabs/:tabId?"
        render={() => {
          tempTab = tabs.find(t => t.id === match.params.tabId);

          return (
            <>
              <nav className="nav">
                {tabs.map(tab => (
                  <NavLink to={`/tabs/${tab.id}`} exact activeClassName="head-active" key={tab.title}>
                    {tab.title}
                  </NavLink>
                ))}
              </nav>
              <p>
                {tempTab === undefined ? noTab : tempTab.content}
              </p>
            </>
          );
        }}
      />
    </div>
  );
};


const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <nav>
      <NavLink to="/" exact activeClassName="page-active" className="page">HomePage</NavLink>
      <NavLink to="/tabs" activeClassName="page-active" className="page">TabsPage</NavLink>
    </nav>
    <Route path="/" exact component={HomePage} />
    <Route
      path="/tabs/:tabId?"
      component={TabsPage}
    />
  </div>
);

export default App;
