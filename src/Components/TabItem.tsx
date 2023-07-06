import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab;
}

export const TabItem: FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      key={tab.id}
      data-cy="Tab"
      className={cn({ 'is-active': tabId === tab.id })}
    >
      <Link to={`/tabs/${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
