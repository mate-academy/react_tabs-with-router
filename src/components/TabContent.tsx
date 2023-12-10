import { tabsData } from '../utils/tabsData';

interface Props {
  selectedTab: string;
}

export default function TabContent({ selectedTab }: Props) {
  const currentTab = tabsData.find(tab => tab.id === selectedTab);
  const currentContent = currentTab?.content || null;

  return (
    <div className="block" data-cy="TabContent">
      {currentContent || 'Please select a tab'}
    </div>
  );
}
