import { useContext } from 'react';
import { TabsList } from '../components/tabsList';
import { TabsContext } from '../context/tabsContext';
import { useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();

  const { currentTab } = useContext(TabsContext);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <TabsList />
      </div>

      <div className="block" data-cy="TabContent">
        {tabId === currentTab.id ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
