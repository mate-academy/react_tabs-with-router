import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab
};

export const TabItem: FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      key={tab.id}
      data-cy="Tab"
      className={classNames({
        'is-active': tabId === tab.id,
      })}
    >
      <Link to={`../${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
