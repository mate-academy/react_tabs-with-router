import { FC } from 'react';
import { Tab } from '../types/Tab';

interface TabProps {
  selectedTab?: Tab
}

export const TabResource: FC<TabProps> = ({ selectedTab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? (`${selectedTab.content}`) : 'Please select a tab'}
    </div>
  );
};
