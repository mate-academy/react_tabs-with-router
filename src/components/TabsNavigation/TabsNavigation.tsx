import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId: string | undefined;
};

export const TabsNavigation: React.FC<Props> = ({ tabs, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                data-cy="Tab"
                className={classNames(
                  { 'is-active': tab.id === activeTabId },
                )}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(activeTab && (activeTab.content)) || 'Please select a tab'}
      </div>
    </>
  );
};
