import { NavLink, Outlet, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabsId } = useParams();

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab, index) => (
              <li
                key={index}
                data-cy="Tab"
                className={tabsId === tab.id ? 'is-active' : ''}
              >
                <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Outlet context={tabs} />
      </div>
    </div>
  );
};
