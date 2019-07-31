import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = ({ tabs, setstyle, setVisibleTab, visible, match }) => (
  <>

    {match.match.params.tabId && match.match.params.tabId !== tabs[visible].id
    && setVisibleTab(tabs.findIndex(tab => tab.id === match.match.params.tabId)) }

    <div className="new">
      <h1>This is a TabPage for Tabs with Router</h1>
      <h3>{tabs.length} tabs avalable</h3>
    </div>

    <div className="panel">
      {tabs.map((tab, index) => (
        <div
          key={tab.title}
          // className={setstyle(index)}
          onClick={() => setVisibleTab(index)}
        >
          <Link className={setstyle(index)} to={`/tabs/${tab.id}`}>
            {tab.title}
          </Link>
        </div>
      ))}
    </div>

    <div className="tabText">
      <div className="tabInner">
        <h2><p>{tabs[visible].title}</p></h2>
        <p>{tabs[visible].content}</p>
      </div>
    </div>
  </>
);

export default Tabs;
