import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
}

export const TabsTable: FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': selectedTabId && tab.id === selectedTabId,
              })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? (selectedTab.content)
          : ('Please select a tab')}
      </div>
    </>
  );
};
