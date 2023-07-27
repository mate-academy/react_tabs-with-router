import { useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabContent = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const selectedTab = tabs.find((tab) => tab.id === tabId);

  return (
    <div className="block">
      {selectedTab ? selectedTab.content : 'Please select a tab'}
    </div>
  );
};
