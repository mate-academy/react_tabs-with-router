import { useContext } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { TabsContext } from '../context/TabsContext';
import { Tab } from '../types/Tab';

export const Tabs = () => {
  const tabs = useContext(TabsContext);
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div data-cy="TabContent" className="tab-content">
        <Outlet />
      </div>
    </>
  );
};
