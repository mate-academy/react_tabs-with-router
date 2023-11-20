// import { Tab } from '../Tab/Tab';
// import { TabType } from '../../types/Tab';

export const Tabs: React.FC = () => {
  // const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      {/* <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              id={tab.id}
              title={tab.title}
              isActive={activeTabId === tab.id}
              setActiveTabId={setActiveTabId}
            />
          ))}
        </ul>
      </div> */}

      <div className="block" data-cy="TabContent">
        {/* {selectedTab.content} */}
      </div>
    </div>

  );
};
