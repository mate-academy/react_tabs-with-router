import { FC } from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  selectedTab: Tab | null,
};

export const TabContent: FC<Props> = ({ selectedTab }) => (
  <div className="block" data-cy="TabContent">
    {selectedTab
      ? (
        selectedTab.content
      ) : (
        'Please select a tab'
      )}
  </div>
);
