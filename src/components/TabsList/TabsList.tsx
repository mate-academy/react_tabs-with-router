import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem/TabItem';

type Props = {
  tabs: Tab[],
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const isValidUrlTab = tabs.some(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              tab={tab}
              key={tab.id}
              selectedTab={tabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!isValidUrlTab
          ? 'Please select a tab'
          : (tabs.find(tab => tab.id === tabId))?.content}
      </div>
    </>
  );
};
