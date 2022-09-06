import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { id } = useParams();
  const currentTab = useMemo(() => {
    return tabs.find(tab => tab.id === id);
  }, [id]);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': id === tab.id,
              })}
              key={tab.id}
              data-cy="tab"
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {currentTab ? currentTab.content : 'Tab not found'}
      </div>
    </div>
  );
};
