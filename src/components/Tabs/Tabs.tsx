import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(({ id, title }) => (
        <li
          data-cy="Tab"
          className={cn({ 'is-active': id === selectedTabId })}
          key={id}
        >
          <Link to={`/tabs/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
