import { Link, useParams } from 'react-router-dom';
import { tabs } from './TabsData';
import classNames from 'classnames';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : '';
  const currentContent = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tab.id === selectedTabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!currentContent ? 'Please select a tab' : currentContent}
      </div>
    </>
  );
};
