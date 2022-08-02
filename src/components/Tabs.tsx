import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

const TabsPage:React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const TabChoosen = selectedTab !== undefined;

  return (
    <div className="section">
      <div className={classNames('title', 'is-1')}>
        Tabs Page
      </div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} data-cy="tab">
              <NavLink
                to={`/tabs/${tab.id}`}
                className={({ isActive }) => (isActive
                  ? 'is-active' : 'inactive')}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {TabChoosen ? selectedTab.content
          : 'Please, select a tab'}
      </div>
    </div>
  );
};

export default TabsPage;
