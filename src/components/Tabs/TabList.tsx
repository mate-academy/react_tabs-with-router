import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabItem } from './TabItem';

type Props = {
  tabs: Tab[]
};

export const TabList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const tabContent = tabs.find(tab => tab.id === tabId)?.content || '';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem currentId={tabId} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId && tabContent ? (
          `${tabContent}`
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
