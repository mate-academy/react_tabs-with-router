import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  items: Tab[],
};

export const Tabs: React.FC<Props> = ({ items }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {!!items.length && items.map(item => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': item.id === tabId })}
              key={item.id}
            >
              <Link to={`../${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {items.find(item => item.id === tabId)?.content
          || 'Please select a tab'}
      </div>
    </>
  );
};
