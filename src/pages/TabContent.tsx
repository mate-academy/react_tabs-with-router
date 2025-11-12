import { useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', content: 'Some text 1' },
  { id: 'tab-2', content: 'Some text 2' },
  { id: 'tab-3', content: 'Some text 3' },
];

export const TabContent = () => {
  const { tabId } = useParams();
  const tab = tabs.find(t => t.id === tabId);

  if (!tab) {
    return (
      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    );
  }

  return (
    <div className="block" data-cy="TabContent">
      {tab.content}
    </div>
  );
};
