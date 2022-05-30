import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './TabsPage.scss';

type Props = {
  tabs:Tab[];
};

export const TabsPage:React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams<{ tabId: string }>();

  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="PageTitle">Tabs</h1>
      <div className="tabs">
        {tabs.map(tab => (
          <div className="tab">
            <div className="tab__link" key={tab.id}>
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </div>
            <div className="tab__content">
              {currentTab && currentTab.id === tab.id && (tab.content)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
