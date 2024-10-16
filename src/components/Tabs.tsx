import { useContext, useState } from 'react';
import { tabs } from '../data';
import { NavLink, Outlet } from 'react-router-dom';
import { TabContext } from './TabProvide';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

export const Tabs = () => {
  const [data] = useState<Tab[]>(tabs);

  const { currentTab, setCurrentTab } = useContext(TabContext);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {data.map(el => {
            return (
              <li
                onClick={() => setCurrentTab(el)}
                className={classNames({
                  'is-active': currentTab && el.id === currentTab.id,
                })}
                data-cy="Tab"
                key={el.id}
              >
                <NavLink to={`${el.id}`} className="is-active">
                  {el.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        <Outlet />
      </div>
    </>
  );
};
