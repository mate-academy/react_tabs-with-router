import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabItem } from './TabItem';

type Props = {
  tabs: Tab[],
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const tabcontent = tabs.find(({ id }) => id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem tab={tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId === tabcontent}
        {tabcontent?.content || 'Please select a tab'}
      </div>
    </>
  );
};
