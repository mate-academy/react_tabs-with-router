import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId?: string | null,
  setSelectedTab: (tab: Tab) => void
};

export const TabsPage: React.FC<Props> = ({
  tabs, selectedTabId, setSelectedTab,
}) => {
  const isSelectedTab = tabs.find(tab => tab.id === selectedTabId);

  const selectTab = (tab: Tab) => {
    if (tab.id !== isSelectedTab?.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                { 'is-active': isSelectedTab?.id === tab.id },
              )}
              key={tab.id}
            >
              <Link
                to={`../${tab.id}`}
                onClick={() => selectTab(tab)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isSelectedTab
          ? isSelectedTab?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
