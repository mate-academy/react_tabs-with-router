import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';
import './App.css';
import { TabsContext } from './components/TabContent';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const App = () => (
  <div className="container">
    <button
      type="button"
      className="btn btn-primary"
    >
      <NavLink to="/" exact>HOME</NavLink>
    </button>
    <button
      type="button"
      className="btn btn-success"
    >
      <NavLink to="/tabs" exact>TABS</NavLink>
    </button>
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route
        path="/tabs/:tabId?"
        render={({ match }) => {
          const { tabId } = match.params;

          return (
            <>
              <TabsContext.Provider value={{
                tabs, tabId,
              }}
              >
                <TabsPage
                  tabs={tabs}
                />
              </TabsContext.Provider>
            </>
          );
        }

        }
      />

    </Switch>
  </div>

);

export default App;
