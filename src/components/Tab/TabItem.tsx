import React from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
}

export const TabItem: React.FC<Props> = ({
  tab,
}) => {
  const { title, id } = tab;
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={cn({
        'is-active': tabId === id,
      })}
    >
      <Link
        to={`/tabs/${id}`}
      >
        {title}
      </Link>
    </li>
  );
};
