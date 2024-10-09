import { TabList } from '../Loader/TabList';
import { tabs } from '../../api/tabs';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab: Tab | null = tabs.find(t => t.id === tabId) || null;
  const tabContent = selectedTab?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <TabList key={id} id={id} title={title} selectedTab={selectedTab} />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
