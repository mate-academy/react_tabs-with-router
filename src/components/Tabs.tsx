import cn from 'classnames';
import { FC } from 'react';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
}

const getTabById = (
  tabsList: Tab[],
  id: string,
) => (
  tabsList.find(tab => tab.id === id) || tabsList[0]
);

export const Tabs:FC<Props> = ({ tabs, selectedTabId }) => {
  const selectedValidTabId = getTabById(tabs, selectedTabId).id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelected = selectedValidTabId === id;

            return (
              <li
                key={id}
                className={cn({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => !isSelected}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabById(tabs, selectedTabId)?.content}
      </div>
    </div>
  );
};
