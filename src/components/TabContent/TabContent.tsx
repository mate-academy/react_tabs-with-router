import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TabContent.scss';

const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const navigate = useNavigate();

  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="TabContent">
      {
        currentTab
          ? currentTab.content
          : (
            () => {
              navigate('tabs');
            }
          )
      }
    </div>
  );
};

export default TabContent;
