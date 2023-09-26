import { Link } from 'react-router-dom';
import { Tab } from '../../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string | null;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}: Props) => {
  const activeTab = tabs.find(tab => tab.id === selectedTabId) || null;

  const handleClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      <div className="tabs is-boxed">

        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={activeTab
                && tab.id === activeTab.id ? 'is-active' : ''}
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => handleClick(tab)}
              >
                {tab.title}

              </Link>
            </li>
          ))}

        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab
          ? activeTab.content
          : 'Please select a tab'}
      </div>

    </>
  );
};
