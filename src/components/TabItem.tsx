import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab;
  isSelected: boolean;
}

export const TabItem: FC<Props> = ({
  tab,
  isSelected,
}) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames(
        { 'is-active': isSelected },
      )}
    >
      <Link to={`../${id}`}>
        {title}
      </Link>
    </li>
  );
};
