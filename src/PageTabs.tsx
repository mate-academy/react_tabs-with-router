import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from './TabItem';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[],
};

export const PageTabs: FC<Props> = ({ tabs }) => {
  const { tabId = 'tab-0' } = useParams();

  const getContent = (params : string) => {
    const activeTab = tabs.find(tab => tab.id === params);

    return (activeTab?.content || 'Please select a tab');
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              key={tab.id}
              tab={tab}
              selectedTab={tabId}
            />

          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getContent(tabId)}
      </div>
    </>
  );
};
