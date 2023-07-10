import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export type Props = {
  selectedTabId: string,
};

export const TabsBoxes: FC<Props> = ({ selectedTabId = '' }) => {
  const isSelectedTabId = (tabId: string) => tabId === selectedTabId;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab: Tab) => (
          <li
            data-cy="Tab"
            className={classNames({ 'is-active': isSelectedTabId(tab.id) })}
            key={tab.id}
          >
            <Link to={`/tabs/${tab.id}`}>
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
