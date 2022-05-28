import './App.scss';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { Header } from './Components/Header/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { TabsPage } from './Components/TabsPage/TabsPage';
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <div>
    <Header />

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabId?">
        <TabsPage tabs={tabs} />
      </Route>
      <NotFoundPage />
    </Switch>
  </div>
);
