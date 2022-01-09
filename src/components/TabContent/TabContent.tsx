import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

import './TabContent.scss';

type Props = {
  tabs: Tab[],
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tab__content">
      {selectedTab ? (
        <p className="tab__content--text">
          {selectedTab.content}
        </p>
      ) : (
        <h1 className="tab__content--warning">Please select tab</h1>
      )}
    </div>
  );
};
