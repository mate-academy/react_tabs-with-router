import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useTabs } from '../hooks/useTabs';

const Tabs = () => {
  const { tabs } = useTabs();
  const param = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={cn({ 'is-active': tab.id === param.tabId })}
          >
            <NavLink
              to={`/tabs/${tab.id}`}
              className={
                ({ isActive }) => cn('navbar-item', { 'is-active': isActive })
              }
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
