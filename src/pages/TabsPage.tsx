import classNames from 'classnames';
import { Link, useLocation, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';
import { TabContent } from './TabContent';

export const TabsPage: React.FC = () => {
  const { pathname } = useLocation();
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': pathname === `/tabs/${tab.id}`,
                })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <TabContent tabId={tabId} />
    </>
  );
};
