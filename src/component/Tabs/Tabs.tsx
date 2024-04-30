import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import cn from 'classnames';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabsId } = useParams();

  const isUseTab = tabs.find(tab => tab.id === tabsId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': tabsId === tab.id,
              })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isUseTab ? isUseTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
