import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { tabs } from '../api/tabs';

export const Tabs = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={cn({
                  'is-active': activeTab?.id === id,
                })}
                data-cy="Tab"
                key={id}
              >
                <NavLink
                  to={`/tabs/${tab.id}`}
                  data-cy="TabLink"
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
