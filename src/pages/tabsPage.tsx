import { TabsList } from '../components/tabsList';
import { useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();

  const clickedTab = tabId ? tabId.slice(-1) : '';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <TabsList />
      </div>

      <div className="block" data-cy="TabContent">
        {clickedTab ? `Some Text ${clickedTab}` : 'Please select a tab'}
      </div>
    </>
  );
};
