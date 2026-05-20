import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Tab } from "../../types/Tab";

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const { pathname } = useLocation();
  const activeTab = tabs.find((tab) => tab.id === tabId);
  const isTabInvalid = !tabId || !activeTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const targetPath = `/tabs/${tab.id}`;
            const isActive = pathname === targetPath;

            return (
              <li
                className={isActive ? "is-active" : ""}
                data-cy="Tab"
                key={tab.id}
              >
                <Link to={targetPath} data-cy="TabLink">
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isTabInvalid ? <div>Please select a tab</div> : activeTab?.content}
      </div>
    </div>
  );
};
