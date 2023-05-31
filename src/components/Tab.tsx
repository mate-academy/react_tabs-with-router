import { Tab as TabType } from '../types/Tab';

export type TabsMap = {
  id: TabType;
};

type TabProps = {
  tabsMap: TabsMap;
  activeTabId?: string;
};

export const Tab = ({ tabsMap, activeTabId }: TabProps) => {
  if (!activeTabId || !tabsMap[activeTabId as keyof TabsMap]) {
    return (
      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    );
  }

  return (
    <div className="block" data-cy="TabContent">
      {tabsMap[activeTabId as keyof TabsMap].content}
    </div>
  );
};
