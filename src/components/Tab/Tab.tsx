import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
}

export const TabComponent: FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  const {
    id,
    title,
  } = tab;

  const isActive = tabId === id;

  return (
    <li data-cy="Tab" className={cn({ 'is-active': isActive })}>
      <Link to={`../${id}`}>{title}</Link>
    </li>
  );
};
