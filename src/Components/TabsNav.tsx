import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { tabs } from '../data/tabs';

type Props = {
  params: string,
};

export const TabsNav: React.FC<Props> = ({ params }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {
          tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': params === id,
              })}
              key={id}
            >
              <Link to={`/tabs/${id}`}>
                {title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
