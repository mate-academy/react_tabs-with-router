import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from './TabsArr';

export const Tabs = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  const tabContent = selectedTab
    ? selectedTab.content
    : 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => {
            return (
              <li
                data-cy="Tab"
                key={id}
                className={classNames({ 'is-active': tabId === id })}
              >
                <Link to={`/tabs/${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
