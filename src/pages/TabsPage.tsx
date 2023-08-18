import classNames from 'classnames';

import { Link, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                { 'is-active': tabId === tab.id },
              )}
            >
              <Link to={`../${tab.id}`}>{`Tab ${tab.id.slice(-1)}`}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(tabId && currentTab)
          ? (currentTab.content)
          : ('Please select a tab')}
      </div>
    </>

  );
};
