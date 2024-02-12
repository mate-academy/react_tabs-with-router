import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTabs } from '../hooks/useTabs';

const TabContent = () => {
  const { activeTab, setActiveTab, tabs } = useTabs();

  const param = useParams();

  useEffect(() => {
    if (param) {
      setActiveTab(tabs.find(tab => tab.id === param.tabId));
    }
  }, [activeTab, param, setActiveTab, tabs]);

  return (
    <div className="block" data-cy="TabContent">
      {activeTab === undefined ? (
        <>
          Please select a tab
        </>
      ) : (
        <>
          {activeTab.content}
        </>
      )}
    </div>
  );
};

export default TabContent;
