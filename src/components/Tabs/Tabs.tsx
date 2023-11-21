import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useTabsContext } from '../Context';

export const Tabs: React.FC = () => {
  const {
    tabs,
  } = useTabsContext();

  const { id } = useParams();
  const selectedTab = tabs.find(tab => tab.id === id);

  const getLinkClass = (tabId: string) => classNames({
    'is-active': tabId === id,
  });

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={getLinkClass(tab.id)}
              >
                <NavLink
                  to={`${tab.id}`}
                >
                  {tab.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
