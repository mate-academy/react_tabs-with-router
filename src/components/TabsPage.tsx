import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TabList } from './TabList';
import { tabContext } from '../context';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs = useContext(tabContext);

  const enteredTab = tabs.find(tab => tab.id === tabId);
  const content = enteredTab?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <TabList />
      </div>
      <div className="block" data-cy="TabContent">
        {content || 'Please select a tab'}
      </div>
    </>
  );
};
