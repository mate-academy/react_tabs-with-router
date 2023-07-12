import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
}

const getTabContent = (
  tabsList: Tab[],
  id: string,
) => (
  tabsList.find(tab => tab.id === id)?.content ?? 'Please select a tab'
);

export const Tabs:FC<Props> = ({ tabs, selectedTabId }) => {
  const tabContent = getTabContent(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelected = selectedTabId === id;

            return (
              <li
                key={id}
                className={cn({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <Link
                  to={id}
                  data-cy="TabLink"
                >
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
    </div>
  );
};
