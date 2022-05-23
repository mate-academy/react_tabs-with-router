import React from 'react';
import { useParams } from 'react-router-dom';
import './TabContent.scss';

type Props = {
  tabs: Tab[],
};

export const TabContent: React.FC<Props> = React.memo(
  ({ tabs }) => {
    const { tabId } = useParams<{ tabId: string }>();

    const selectedTab = tabs.find(tab => tab.id === tabId);

    return (
      <div className="tab">
        {selectedTab
          ? (
            <p className="tab__content">
              {selectedTab.content}
            </p>
          )
          : (
            <h3 className="tab__content--warning">Please select tab</h3>
          )}
      </div>
    );
  },
);
