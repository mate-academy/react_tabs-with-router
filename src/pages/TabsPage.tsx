import { Link, Outlet, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1' },
  { id: 'tab-2', title: 'Tab 2' },
  { id: 'tab-3', title: 'Tab 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
};
