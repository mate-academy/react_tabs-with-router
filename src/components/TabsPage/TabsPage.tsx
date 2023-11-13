import { Link, useParams } from 'react-router-dom';

import cn from 'classnames';

import { tabs } from '../../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabId;

  const invalidTabs = tabs.every(tab => selectedTab !== tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': tab.id === selectedTab,
              })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {tabs.map(tab => (
        <>
          <div className="block" data-cy="TabContent">
            {selectedTab === tab.id && (
              tab.content
            )}
          </div>
        </>
      ))}

      {invalidTabs || !selectedTab ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        null
      )}
    </>
  );
};
