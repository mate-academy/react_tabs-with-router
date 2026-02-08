import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Tabs } from './Tabs';
import { TabsContext } from './TabsContext';

export const PageContent = () => {
  const tabs = useContext(TabsContext);
  const { tabId } = useParams();

  const tab = tabs.find(t => t.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs />

        <div className="block" data-cy="TabContent">
          {!tabId && 'Please select a tab'}
          {tabId && !tab && 'Please select a tab'}
          {tab && tab.content}
        </div>
      </div>
    </div>
  );
};
