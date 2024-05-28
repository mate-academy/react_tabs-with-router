import { FC } from 'react';
import { tabs } from '../constants/tabs';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

export const TabsPage: FC = () => {
  const { tabId } = useParams();
  const tab = tabs.find(({ id }) => id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={cn({ 'is-active': tab?.id === id })}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tab ? tab.content : 'Please select a tab'}
      </div>
    </>
  );
};
