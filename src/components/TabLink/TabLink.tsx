import classNames from 'classnames';
import { FC } from 'react';
import { tabs } from '../../api/tabs';
import { PageNavLink } from '../PageNavLink';

type Props = {
  selectedTabId: string,
};

export const TabLink: FC<Props> = ({ selectedTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={classNames({ 'is-active': tab.id === selectedTabId })}
        >
          <PageNavLink to={`/tabs/${tab.id}`} text={tab.title} />
        </li>
      ))}
    </ul>
  </div>
);
