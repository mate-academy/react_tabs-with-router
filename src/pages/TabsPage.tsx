import { useParams } from 'react-router-dom';
import TabItem from '../components/TabItem/TabItem';

const TabsPage: React.FC = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];
  const { tabId } = useParams();
  const tabIds = tabs.map((tab) => tab.id);
  const isCurrentPage = tabIds.includes(`${tabId}`);
  const currentContent = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabItem tab={tab} key={tab.id} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isCurrentPage ? (
          currentContent?.content
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};

export default TabsPage;
