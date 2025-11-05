import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="section">
        <div className="container">
          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  data-cy="Tab"
                  key={tab.id}
                  className={classNames({
                    'is-active': tabId === tab.id,
                  })}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="block" data-cy="TabContent">
            {!tabId || !tabs.find(t => t.id === tabId)
              ? 'Please select a tab'
              : tabs.find(t => t.id === tabId)!.content}
          </div>
        </div>
      </div>
    </>
  );
};
