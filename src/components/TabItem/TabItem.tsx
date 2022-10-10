import classNames from 'classnames';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
}

export const TabItem: FC<Props> = ({ tab }) => {
  const { title, id } = tab;
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': tabId === id })}
    >
      <Link
        to={`/tabs/${id}`}
      >
        {title}
      </Link>
    </li>
  );
};
