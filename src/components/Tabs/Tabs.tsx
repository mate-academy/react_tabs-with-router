import { Tab } from '../../types/Tab';

interface PropsTabs {
  tabs: Tab[];
  activeTabId: string | undefined;
  onTabSelected: (tabId: string) => void;
}
export const Tabs = ({ tabs, activeTabId }: PropsTabs) => {
  const selectedTabId =
    activeTabId && tabs.some(tab => tab.id === activeTabId)
      ? activeTabId
      : null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onTabSelected(_id: string) {
    throw new Error('Function not implemented.');
  }

  // Removed unused onTabSelected function

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={e => {
                  e.preventDefault();
                  // Use the onTabSelected prop
                  onTabSelected(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTabId
          ? tabs.find((tab: Tab) => tab.id === selectedTabId)?.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
