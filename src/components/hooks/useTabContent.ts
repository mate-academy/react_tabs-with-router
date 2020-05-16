import { useCallback, useState } from 'react';

export const useTabContent = (tabs: Tab[], currentTabId: string) => {
  const [tabContent, setTabContent] = useState(
    (tabs.find(tab => tab.id === currentTabId) || {}).content,
  );

  const handleSettingTab = useCallback((content) => {
    setTabContent(content);
  }, []);

  return {
    tabContent,
    handleSettingTab,
  };
};
