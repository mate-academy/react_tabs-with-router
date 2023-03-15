import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Tab } from '../types/Tab';

type Props = {
  tabsList: Tab[],
  activeId: string,
  changeContent: (content: string) => void,
};

export const TabsList: React.FC<Props> = ({
  tabsList,
  activeId,
  changeContent,
}) => {
  const isActive = (id: string) => id === activeId;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabsList.map(tab => {
          const {
            title,
            id,
            content,
          } = tab;

          if (isActive(id)) {
            changeContent(content);
          }

          return (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': isActive(id) })}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
