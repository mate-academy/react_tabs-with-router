import { useParams } from 'react-router-dom';

export const TabContent = () => {
  const { tabsId } = useParams();

  const tabs = [
    { id: 'tab1', content: 'text 1' },
    { id: 'tab2', content: 'text 2' },
    { id: 'tab3', content: 'text 3' },
  ];

  const selectedTab = tabs.find(tab => tab.id === tabsId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? `Some ${selectedTab.content}` : 'Please select a tab'}
    </div>
  );
};
