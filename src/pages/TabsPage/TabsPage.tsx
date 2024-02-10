import { useParams } from 'react-router-dom';
import { TabsList } from '../../components/TabsList/TabsList';
import tabs from '../../api/tabs.json';

export const TabsPage = () => {
  const { tabId } = useParams();

  const message = (tabs?.find(tab => tab.id === tabId));

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <TabsList />

      <div className="block" data-cy="TabContent">
        {message?.content ? (
          message?.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </div>
  );
};
