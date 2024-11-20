import cn from 'classnames';
import { tabs } from '../../constants/tabs';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface TabsProps {
  tabId: string | undefined;
}

export const Tabs: FC<TabsProps> = ({ tabId }) => {
  const activeTab = tabs.find(({ id }) => id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={cn({
                'is-active': id === tabId,
              })}
              data-cy="Tab"
              key={id}
            >
              <Link to={id} data-cy="TabLink">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!activeTab ? 'Please select a tab' : activeTab.content}
      </div>
    </div>
  );
};
