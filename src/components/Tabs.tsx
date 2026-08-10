import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

interface Tabs {
  id: string;
  title: string;
  content: string;
}

interface TabsProps {
  tabs: Tabs[];
}

export const TabsList = ({ tabs }: TabsProps) => {
  const selectedTab = useLocation();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return (
            <li
              key={tab.id}
              className={classNames({
                'is-active': selectedTab.pathname === `/tabs/${tab.id}`,
              })}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
