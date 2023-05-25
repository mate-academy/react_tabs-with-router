import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
}

export const TabItem: FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': tabId === id })}
    >
      <Link to={`/tabs/${id}`}>
        {title}
      </Link>
    </li>
  );
};
