import React, {FC} from 'react';
import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { Route, Switch } from 'react-router-dom';
import 'bulma';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: FC = () => {
  return (
    <div className="content">
      <div className="App">
        <div className="header">
          <Navigation />
        </div>

        <div className="body">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/tabs/:tabId?">
              <TabsPage tabs={tabs} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};
