import React from 'react';
import { Tab } from './Tab';

import { tabs as tabsFromServer } from '../api/tabsFromServer';

export const Tabs: React.FC = () => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabsFromServer.map(({ id, title }) => (
          <Tab key={id} id={id} title={title} />
        ))}
      </ul>
    </div>
  );
};
