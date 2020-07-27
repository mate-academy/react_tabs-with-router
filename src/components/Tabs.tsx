import React from 'react';
import Tab from './Tab';

type Props = {
  tabs: Tab[];
  tabId: string;
};

const Tabs: React.FC<Props> = ({ tabId, tabs }) => {
  return (
    <>
      <h3>Tabs</h3>
      <div className="tabs">
        {tabs.map((tab: Tab) => (
          <button
            type="submit"
            key={tab.id}
            className={tabId === tab.id ? 'tabs__click tabs__click-active' : 'tabs__click'}
          >
            <Tab
              tab={tab}
            />
          </button>
        ))}
      </div>
      <section className="tabs__container">
        <h3>
          {tabs.find(tab => tab.id === tabId)?.content}
        </h3>
      </section>
    </>
  );
};

export default Tabs;
