import { FC } from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  activeTabId: string;
}

export const Tabs: FC<Props> = ({ tabs, activeTabId }) => {
  return (
    <>
      <ul>
        {tabs.map(tab => {
          const { id, title } = tab;

          return (
            <li
              data-cy="Tab"
              key={id}
              className={cn({ 'is-active': id === activeTabId })}
            >
              <Link to={`../${id}`} data-cy="TabLink">
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
