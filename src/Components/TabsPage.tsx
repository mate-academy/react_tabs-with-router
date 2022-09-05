import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';
// eslint-disable-next-line import/no-cycle
import { tabs } from '../App';

export const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === tabId },
              )}
            >
              <NavLink
                to={`../${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {tabs.filter(tab => tab.id === tabId).length
        ? (
          <div className="block" data-cy="TabContent">
            {tabs.find(tab => tab.id === tabId)?.content}
          </div>
        )
        : (
          <div
            className="block"
            data-cy="TabContent"
          >
            Please select a tab
          </div>
        )}

    </>
  );
};
