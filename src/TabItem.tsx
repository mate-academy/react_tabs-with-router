import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { tabs } from './api/Tabs';

export const TabItem = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const selectedTab = tabs.filter(tab => tab.id === tabId)[0];

  useEffect(() => {
    if (!selectedTab) {
      navigate('..');
    }
  }, [selectedTab, navigate]);

  if (!selectedTab) {
    return null;
  }

  return <p data-cy="TabContent">{selectedTab.content}</p>;
};
