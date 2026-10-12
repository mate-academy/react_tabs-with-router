import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { APP_ROUTES, TABS } from '../constants';

export const Tabs = () => {
  const { tabId } = useParams();
  const content = TABS.find(tab => tab.id === tabId)?.content;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {TABS.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === tabId })}
              >
                <Link to={`${APP_ROUTES.TABS}/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {content || 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
