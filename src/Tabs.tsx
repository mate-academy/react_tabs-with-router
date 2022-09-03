import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[],
};
export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { id } = useParams();
  const selectedTab = useMemo(() => {
    return tabs.find(tab => tab.id === id);
  }, [id]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
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
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
