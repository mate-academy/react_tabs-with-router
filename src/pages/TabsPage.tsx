import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const confirmedTabId = tabId;

  const confirmedTabContent = tabs
    .find(({ id }) => id === confirmedTabId)?.content
    || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames(
                { 'is-active': confirmedTabId === id },
              )}
            >
              <Link to={`/tabs/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {confirmedTabContent}
      </div>
    </>
  );
};
