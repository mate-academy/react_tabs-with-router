import { useLocation, useParams } from 'react-router-dom';
import { Tabs } from './Tabs';
import { useContext } from 'react';
import { TabsContext } from './TabsContext';

export const TabsPage = () => {
  const tabs = useContext(TabsContext);
  const { pathname } = useLocation();
  const { tabId } = useParams();

  const tab = tabId ? tabs.find(t => t.id === tabId) : undefined;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        {pathname.startsWith('/tabs') && <Tabs />}

        <div className="block" data-cy="TabContent">
          {tab ? tab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
