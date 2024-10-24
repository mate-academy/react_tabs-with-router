import { NavLink, useLocation } from 'react-router-dom';
import { Tabb } from './Tab';

export const Tabs = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const pathname = useLocation().pathname;
  const selected = tabs.find(tab => pathname === `/tabs/${tab.id}`);
  const location = useLocation();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = location.pathname === `/tabs/${tab.id}`;

            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={isActive ? 'is-active' : ''}
              >
                <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {selected ? (
        <Tabb tabs={tabs} />
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
