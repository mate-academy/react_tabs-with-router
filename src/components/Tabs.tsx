import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId: string;
  onTabSelected: (tabId: string) => void;
  getTabHref: (tabId: string) => string;
};

export const Tabs = ({
  tabs,
  activeTabId,
  onTabSelected,
  getTabHref,
}: Props) => {
  if (tabs.length === 0) {
    return null;
  }

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === activeTabId;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={getTabHref(tab.id)}
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault();

                    if (!isActive) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
