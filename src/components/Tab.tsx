import { tabs } from '../data/tabs';

type Props = {
  tabId: string | undefined;
};
function Tab({ tabId }: Props) {
  const activeTab = tabId ? tabs.find(tab => tab.id === tabId) : null;

  return (
    <div className="block" data-cy="TabContent">
      {!activeTab && 'Please select a tab'}
      {activeTab && activeTab.content}
    </div>
  );
}

export default Tab;
