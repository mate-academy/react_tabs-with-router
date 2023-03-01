import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const tabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              tab={tab}
              tabId={tabId}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent || 'Please select a tab'}
      </div>
    </>
  );
};
