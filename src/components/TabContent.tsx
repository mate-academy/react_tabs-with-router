import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { tabs } from '../tabs';
import { TabContext } from '../TabContext';

export const TabContent = () => {
  const { setSelectedTab } = useContext(TabContext);

  const { tabId } = useParams();

  if (!tabId || (
    !tabs.map(tab => tab.id).includes(tabId)
  )) {
    return (
      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    );
  }

  const filteredTabs = tabs.filter((tab) => tab.id === tabId);

  setSelectedTab(tabId);

  return (
    <div className="block" data-cy="TabContent">
      {filteredTabs.map((tab) => (
        <div key={tab.id}>{tab.content}</div>
      ))}
    </div>
  );
};
