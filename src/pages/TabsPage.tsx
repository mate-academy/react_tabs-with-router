import { useParams, Link } from 'react-router-dom';
import cn from 'classnames';
import { tabs } from '../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTabId = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <>
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === tabId })}
              >
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId ? selectedTabId?.content : 'Please select a tab'}
      </div>
    </>
  );
};
