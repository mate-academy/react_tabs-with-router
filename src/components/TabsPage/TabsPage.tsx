import { useParams } from 'react-router-dom';
import { TabItem } from '../TabItem';
import { tabs } from '../../tabs';

export const TabsPage = () => {
  const { tabId } = useParams<string>();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((item) => (
            <TabItem
              key={item.id}
              tabId={tabId}
              tab={item}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find((item) => item.id === tabId)?.content
         || 'Please select a tab'}
      </div>
    </>
  );
};
