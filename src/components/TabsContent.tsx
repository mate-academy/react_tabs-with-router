import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const TabsContent: React.FC<Props> = ({ tab }) => {
  return (
    <h2 data-cy="TabContent" className="block">
      {tab.content}
    </h2>
  );
};
