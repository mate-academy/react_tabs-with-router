import classNames from 'classnames';
import { FC } from 'react';
import {
  Link, useParams,
} from 'react-router-dom';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
};

export const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId = 0 } = useParams();

  return (
    <>
      <h1 className="title">Tabs Page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {tabId === 0 && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
