import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useTabContent = (tabs: Tab[], currentTabId: string) => {
  const [tabContent, setTabContent] = useState(
    (tabs.find(tab => tab.id === currentTabId))?.content);
  const { tabId } = useParams();

  useEffect(() => {
    setTabContent(((tabs.find(tab => tab.id === tabId)
      || (tabs.find(tab => tab.id === currentTabId)))?.content));
  });

  const handleSettingTab = useCallback((content) => {
    setTabContent(content);
  }, []);

  return {
    tabContent,
    handleSettingTab,
  };
};
