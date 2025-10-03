import { useContext } from 'react';
import { TabContext } from '../TabContext';
import { Tabs } from '../components/Tabs';
import { useParams } from 'react-router-dom';

export const TabsPage = () => {
  const tabContext = useContext(TabContext);
  const { tabId } = useParams();

  if (!tabContext) {
    return null;
  }

  const { tabs } = tabContext;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={tabId} />
    </>
  );
};
