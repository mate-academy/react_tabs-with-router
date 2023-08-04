import { useMemo } from 'react';
import { tabs } from '../DB/tabs';

type Props = {
  selectedTabId?: string,
};

export const TabContent: React.FC<Props> = ({ selectedTabId }) => {
  const selectedTab = useMemo(() => {
    return tabs.find(tab => tab.id === selectedTabId);
  }, [selectedTabId]);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab?.content || 'Please select a tab'}
    </div>
  );
};
