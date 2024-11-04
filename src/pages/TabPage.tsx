import React from 'react';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab;
}

export const TabPage: React.FC<Props> = ({ tab }) => (
  <div className="block" data-cy="TabContent" key={tab.id}>
    {tab.content}
  </div>
);
