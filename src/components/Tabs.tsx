import classNames from 'classnames';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TabsContext } from '../TabsContext';
import { Tab } from '../types/Tab';

type Props = {
  tabId?: string;
};

export const Tabs: React.FC<Props> = ({
  tabId,
}) => {
  const tabs: Tab[] = useContext(TabsContext);
  const selectedTab = tabs
    .find(currentTab => currentTab.id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === tabId,
              })}
              key={tab.id}
            >
              <Link
                data-cy="TabLink"
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
