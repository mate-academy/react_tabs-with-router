import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);
  const isLinkActive = ({ isActive }: { isActive: boolean }) =>
    classNames({
      'is-active': isActive,
    });

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={isLinkActive({ isActive: tab.id === tabId })}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      {!currentTab ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {currentTab?.content}
        </div>
      )}
    </>
  );
};
