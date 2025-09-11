import { tabs } from '../data/tabs';

type Props = {
  tabId: string | undefined;
};
export const TabContent: React.FC<Props> = ({ tabId }) => {
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {currentTab ? currentTab.content : 'Please select a tab'}
    </div>
  );
};
