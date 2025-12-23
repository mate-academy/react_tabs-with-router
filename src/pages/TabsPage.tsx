import { Outlet } from 'react-router-dom';
import { Tab } from '../components/Tab';
import { tabs } from '../tabs';

export const TabsPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
};
