import { Link, useLocation } from 'react-router-dom';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
};

export const Tabs = ({ tabs }: TabsProps) => {
  const location = useLocation();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const tabPath = `/tabs/${tab.id}`;
          const isActive = location.pathname === tabPath;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={isActive ? 'is-active' : ''}
            >
              <Link to={tabPath}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
