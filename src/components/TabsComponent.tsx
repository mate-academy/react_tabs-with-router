import { Outlet } from 'react-router-dom';
import { TabNavLink } from './TabNavLink';
import { tabs } from '../tabs/tabs';

export const TabsPage = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.length && tabs
            .map((tab) => <TabNavLink tab={tab} key={tab.id} />)}
        </ul>
      </div>

      <Outlet />
    </>
  );
};
