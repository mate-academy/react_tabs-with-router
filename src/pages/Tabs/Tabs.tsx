import { Link, Outlet, useParams } from 'react-router-dom';
import { tabs } from '../../data/data';

export const Tabs = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
              key={tab.id}
            >
              <Link to={`${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(el => el.id === tabId) ? (
          <Outlet />
        ) : (
          <span>Please select a tab</span>
        )}
      </div>
    </>
  );
};
