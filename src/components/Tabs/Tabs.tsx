import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavTabs } from '../NavTabs';
import { TabPage } from '../TabPage';
import { TabI } from '../../api/interface';

const tabs: TabI[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  return (
    <div>
      <NavTabs tabs={tabs} />

      <Switch>
        <Route path="/tabs">
          <TabPage tabs={tabs} />
        </Route>

        <h2>Please select a tab</h2>
      </Switch>
    </div>
  );
};
