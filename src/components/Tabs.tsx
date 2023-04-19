import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[],
  selected: string,
};

export const Tabs: FC<Props> = ({ tabs, selected }: Props) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          value={tab.id}
          data-cy="Tab"
          aria-hidden="true"
          className={classNames('',
            { 'is-active': tab.id === selected })}
        >
          <Link to={`../${tab.id}`} data-cy="TabLink">
            {tab.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
