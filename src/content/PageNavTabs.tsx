import classNames from 'classnames';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

type Props = {
  to: string;
  tabId: string;
  text: string;
};

export const PageNavTabs: FC<Props> = ({ to, tabId, text }) => {
  const { tab } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': tabId === tab,
      })}
    >
      <Link to={to}>
        {text}
      </Link>
    </li>
  );
};
