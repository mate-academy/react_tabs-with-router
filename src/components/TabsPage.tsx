import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { tabs } from '../data/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tableContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === id })}
              key={id}
            >
              <Link to={`/tabs/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {tableContent ? (
        <div className="block" data-cy="TabContent">
          {tableContent}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
