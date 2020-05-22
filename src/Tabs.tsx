import React from 'react';
import Tab from './Tab';

type Props = {
  tabs: Tab[];
  tabId: string;
};

const Tabs: React.FC<Props> = ({ tabId, tabs }) => {
  return (
    <>
      <h3 className="header">Tabs</h3>
      <ul className="tabs">
        {tabs.map((tab: Tab) => (
          <li
            key={tab.id}
            className={tabId === tab.id ? 'tab_active' : 'tab'}
          >
            <Tab
              tab={tab}
            />
          </li>
        ))}
      </ul>
      <section className="tab_content">
        <h3>
          {tabs.find(tab => tab.id === tabId)?.content}
        </h3>
      </section>
    </>
  );
};

export default Tabs;
