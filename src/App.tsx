import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom';
import { Tabs } from './components/Tabs/Tabs';
import { TabsWithRoute } from './components/Tabs/TabsWithRoute';
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import { Navigation } from './components/Navigation/Navigation';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <HashRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/tabs" render={() => <Tabs tabs={tabs} />} />
          <Route
            path="/tabs/:tabId"
            render={() => <TabsWithRoute tabs={tabs} />}
          />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  );
};
