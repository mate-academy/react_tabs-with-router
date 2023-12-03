import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabItem } from './TabItem';

interface Props {
  tabs: Tab[];
}

export const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(({ id }) => id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <TabItem
              id={id}
              key={id}
              title={title}
              selectedTabId={tabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
