import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
}) => {
  const selectedTab = tabs
    .find((tab) => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isTabSelected = id === selectedTab?.id;

            return (
              <li
                key={id}
                className={isTabSelected
                  ? 'is-active'
                  : ''}
                data-cy="Tab"
              >
                <Link
                  to={`/tabs/${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
