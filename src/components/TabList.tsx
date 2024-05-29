import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import cn from 'classnames';

type Props = {
  tabs: Tab[];
};

export const TabList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const finderTab = tabs.find(tab => tab.id === tabId) as Tab;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === finderTab?.id })}
                key={tab.id}
              >
                <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {tabId && finderTab ? (
        <Outlet />
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
