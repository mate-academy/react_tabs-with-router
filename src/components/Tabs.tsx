import classNames from 'classnames';
import { useMatch } from 'react-router-dom';
import { Tab } from '../types/Tab';

export const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const checkUrl = useMatch('/tabs/:tabId');
  const selectedTabId = checkUrl?.params.tabId || null;

  const find = tabs.find((tab) => tab.id === selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const active = selectedTabId === tab.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': active,
                })}
              >
                <a href={`#/tabs/${tab.id}`}>{tab.title}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {find ? (
        <div className="block" data-cy="TabContent">
          {find.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
