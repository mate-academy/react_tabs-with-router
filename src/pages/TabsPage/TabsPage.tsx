import { useParams } from 'react-router-dom';
import { TabItem } from '../../components/TabItem/TabItem';
import { tabs } from '../../tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(({ id }) => id === tabId);

  return (
    <>
      <h1 className="title">
        Tabs page
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem tab={tab} key={tab.id} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
