import React from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = React.memo(({ tabs }) => {
  const { tabId } = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            className={cn({
              'is-active': tab.id === tabId,
            })}
            key={tab.id}
          >
            <Link to={`../${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
