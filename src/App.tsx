import { Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { MainNavigation } from './components/MainNavigation';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <MainNavigation />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/tabs/:tabId?">
        <TabsPage tabs={tabs} />
      </Route>

      <p className="App__error title is-2">Page not found</p>
    </Switch>
  </div>
);

export default App;
