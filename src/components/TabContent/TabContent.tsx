import React from 'react';

import './TabContent.scss';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const TabContent:React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <div className="tab-content">
      {selectedTab ? (
        <h3>{selectedTab.content}</h3>
      ) : (
        <p>Please select a tab</p>
      )}
    </div>
  );
};
