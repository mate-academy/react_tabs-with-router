import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

import './TabContent.scss';

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
