import { Link, useParams } from 'react-router-dom';
import { tabs } from '../utils/tabsArray';
import classNames from 'classnames';

export const TabsPage = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tabId === tab.id);

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id == tabId })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {currentTab ? (
        <div className="block" data-cy="TabContent">
          {currentTab?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
