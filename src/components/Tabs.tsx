import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab?: string,
};

export const Tabs: FC<Props> = ({ tabs, selectedTab }) => {
  const isSelected = (tab: Tab) => tab.id === selectedTab;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': isSelected(tab) })}
            >
              <Link
                to={isSelected(tab) ? '/tabs' : `/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTab)?.content
          || 'Please select a tab'}
      </div>
    </>
  );
};
