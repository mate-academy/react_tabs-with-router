import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TabContext } from '../store/TabContext';

export const TabContent = () => {
  const { tabId } = useParams();
  const id = tabId ? tabId : '';

  const { tabs } = useContext(TabContext);
  const correctTabId = tabs.map(t => t.id).includes(id);

  return (
    <div className="block" data-cy="TabContent">
      {correctTabId
        ? tabs.map(tab => tab.id === tabId && tab.content)
        : 'Please select a tab'}
    </div>
  );
};
