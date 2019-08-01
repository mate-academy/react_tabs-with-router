import React from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Tabs = ({ match }) => {
  let tabId = match.params.tabId
    ? tabs.findIndex(tab => tab.id === match.params.tabId)
    : 0;

  tabId = tabId >= 0 ? tabId : 0;

  return (
    <>
      <div className="new">
        <h1>This is a TabPage for Tabs with Router</h1>
        <h3>{tabs.length} tabs avalable</h3>
      </div>

      <div className="panel">
        {tabs.map((tab, index) => (
          <div
            key={tab.title}
          >
            <Link
              className={tabId === index ? 'tab selected' : 'tab'}
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="tabText">
        <div className="tabInner">
          <h2>{tabs[tabId].title}</h2>
          <p>{tabs[tabId].content}</p>
        </div>
      </div>
    </>
  );
};

export default Tabs;
