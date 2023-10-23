import { Outlet } from 'react-router-dom';
import { tabs } from '../tabs/tabs';
import { TabNavigation } from './TabNavigation';

export const TabsPage = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.length && tabs
            .map((tab) => <TabNavigation tab={tab} key={tab.id} />)}
        </ul>
      </div>

      <Outlet />
    </>
  );
};
