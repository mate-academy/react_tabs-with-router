import { useCallback, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

export const useTabContent = (tabs: Tab[], currentTabId: string) => {
  const [tabContent, setTabContent] = useState(
    (tabs.find(tab => tab.id === currentTabId) || {}).content,
  );

  const handleSettingTab = useCallback((content) => {
    setTabContent(content);
  }, []);

  const match = useRouteMatch();

  return {
    match,
    tabContent,
    handleSettingTab,
  };
};
