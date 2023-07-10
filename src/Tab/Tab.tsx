import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const TabItem: FC<Props> = ({ tab }) => {
  const { id, title } = tab;
  const { tabId } = useParams();

  return (
    <li
      key={id}
      data-cy="Tab"
      className={cn({
        'is-active': id === tabId,
      })}
    >
      <Link to={id}>
        {title}
      </Link>
    </li>
  );
};
