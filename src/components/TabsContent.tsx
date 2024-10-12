import { Link, useParams } from 'react-router-dom';
import { tabs } from '../App';
import classNames from 'classnames';

export const TabContent = () => {
  const { tabsId } = useParams<{ tabsId: string }>();
  const selectedTabId = tabsId ?? 0;

  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="container">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': tab.id === selectedTabId,
                })}
                key={tab.id}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {currentTab ? currentTab.content : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
