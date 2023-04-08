import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
}
export const TabItem: FC<Props> = ({ tab }) => {
  const { id, title } = tab;
  const { tabId } = useParams();
  const isSelected = id === tabId;

  return (
    <li
      key={id}
      className={cn({
        'is-active': isSelected,
      })}
      data-cy="Tab"
    >
      <Link
        to={`../${id}`}
        data-cy="TabLink"
      >
        {title}
      </Link>
    </li>
  );
};
