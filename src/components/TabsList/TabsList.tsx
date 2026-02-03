import React from "react";
import { Tab } from "../../types/Tab";
import { TabItem } from "../TabItem/TabItem";

type Props = {
  tabs: Tab[]
  activeTabId: string | null
}
export const TabsList: React.FC<Props> = ({tabs, activeTabId}) => {

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <TabItem 
            key={tab.id}
            tab={tab}
            activeTabId={activeTabId}
          />
        ))}
      </ul>
    </div>
  );
};
