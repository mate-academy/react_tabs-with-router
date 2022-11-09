import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { selectTab } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': selectTab === id })}
                key={id}
              >
                <Link to={`${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTab
          ? tabs.find(tab => tab.id === selectTab)?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
