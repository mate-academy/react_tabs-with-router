import React, { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = ({ match }) => {
  const tabsId = match.params.tabsId;
  const tabId = tabs.map(tab=> tab.id);

  return (
    <div className="content">
      <div className="block">
        {tabs.map(tab => (
          <div
            key={tab.id}
          >
            <Link
              className={`title ${tabsId === tab.id && "title-active"}`}
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </Link>

            {tabsId === tab.id && <p className="paragraph">{tab.content}</p>}
          </div>
        ))}
      </div>

      {!tabId.includes(tabsId) && <p className="attention">Please select a tab</p>}
    </div>
  );
};
