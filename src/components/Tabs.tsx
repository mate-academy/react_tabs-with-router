// import { useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { TabItem } from './TabItem';

type Props = {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[]
};

export const Tabs: React.FC<Props> = React.memo(({ tabs }) => {
  const { tabId } = useParams();
  const content = tabs.find(tab => tab.id === tabId)?.content
    || 'Please select a tab';

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              tab={tab}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
});
