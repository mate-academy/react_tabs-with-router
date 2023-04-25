// import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { PageNavTabs } from './PageNavTabs';

export const NavBar: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <PageNavTabs
                key={tab.id}
                to={tab.id}
                tabId={tab.id}
                text={tab.title}
              />
            ))}
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};
