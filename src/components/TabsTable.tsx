import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
}

export const TabsTable: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames(
                { 'is-active': selectedTab?.id === tab.id },
              )}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
