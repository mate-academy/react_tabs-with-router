import { Link } from 'react-router-dom';
import cn from 'classnames';

import { findSelectedTab } from '../utils/utils';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const selectedTab = findSelectedTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': selectedTabId === tab.id })}
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedTab
        ? (
          <div className="block" data-cy="TabContent">
            {selectedTab.content}
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
    </div>
  );
};
