import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../types/Tab';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === tabId;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': isActive,
                })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
