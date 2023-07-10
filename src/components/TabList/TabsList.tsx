import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem/TabItem';

type Props = {
  tabs: Tab[],
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem tab={tab} key={tab.id} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
