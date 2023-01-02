import { useParams } from 'react-router-dom';
import { tabs } from '../../api';
import { Tab } from '../Tab';

export const TabsPage = () => {
  const { tabId } = useParams();

  const getContent = () => {
    const currTab = tabs.find(tab => tab.id === tabId);

    return currTab ? currTab.content : 'Please select a tab';
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <Tab tabId={tabId} />
      </div>

      <div className="block" data-cy="TabContent">
        {getContent()}
      </div>
    </>
  );
};
