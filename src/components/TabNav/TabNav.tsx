import classNames from 'classnames';
import { FC } from 'react';
import { tabs } from '../../api/tabs';
import { TabNavlink } from '../TabNavLink';

type Props = {
  selectedTabId: string,
};

export const TabNav: FC<Props> = ({ selectedTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={classNames({ 'is-active': tab.id === selectedTabId })}
        >
          <TabNavlink to={`../${tab.id}`} text={tab.title} />
        </li>
      ))}
    </ul>
  </div>
);
