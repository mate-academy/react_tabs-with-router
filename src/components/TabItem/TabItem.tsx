import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  isSelectedTab: boolean;
}

export const TabItem: FC<Props> = ({
  tab,
  isSelectedTab,
}) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames(
        { 'is-active': isSelectedTab },
      )}
    >
      <Link to={`../${id}`}>
        {title}
      </Link>
    </li>
  );
};
