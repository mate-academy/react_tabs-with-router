import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

type TabsPageProps = {
  someProp: Tab[];
};

export const TabsPage: React.FC<TabsPageProps> = ({ someProp }) => {
  const { tabId: activeTabId } = useParams();
  const tabs = someProp;
  const activeTab = tabs.find(x => x.id === activeTabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': activeTabId === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {!activeTab && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}

      {activeTab && (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      )}

      <Outlet />
    </div>
  );
};
