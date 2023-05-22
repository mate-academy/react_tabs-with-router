import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  tabId: string;
};

export const NewTab: FC<Props> = ({ tab, tabId }) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': tab.id === tabId })}
    >
      <Link to={`/tabs/${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
