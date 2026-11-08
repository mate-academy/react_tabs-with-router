import { NavLink, Outlet, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);
  // console.log(tabId);
  // console.log(selectedTab);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        {/* <h1 className="title">Page not found</h1> */}

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': selectedTab?.id === tab.id })}
              >
                <NavLink to={tab.id}>{tab.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          <Outlet />
          {!selectedTab && 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
