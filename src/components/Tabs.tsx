import { FC } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({ 'is-active': tabId === tab.id })}
            data-cy="Tab"
            key={tab.id}
          >
            <Link
              to={`/tabs/${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
