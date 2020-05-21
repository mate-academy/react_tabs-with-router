import React from 'react';

import Tabs from './Tabs/Tabs';

type Props = {
  tabs: Tab[];
};

const TabsPage: React.FC<Props> = ({ tabs }) => {
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsPage;
