import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || null;
  const content = selectedTab
    ? selectedTab.content
    : 'Please select a tab';

  const handleClick = (tab: Tab) => {
    if (selectedTab?.id === tab.id) {
      return;
    }

    onTabSelected(tab);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const { id, title } = tab;

              return (
                <li
                  key={id}
                  className={classNames({
                    'is-active':
                      selectedTab?.id === tab.id,
                  })}
                  data-cy="Tab"
                >
                  <Link
                    to={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => handleClick(tab)}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    </>

  );
};
