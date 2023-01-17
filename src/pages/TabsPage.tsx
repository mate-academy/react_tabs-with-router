import React from 'react';

import { Tabs } from '../Components/Tabs';

import tabsFromServer from '../api/tabs';

export const TabsPage: React.FC = React.memo(() => (
  <>
    <h1 className="title">Tabs page</h1>

    <Tabs tabs={tabsFromServer} />
  </>
));
