import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab[],
};

export const TabsPage: FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const selectedTabId = tab.find(item => tabId === item.id)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tab.map((item) => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': item.id === tabId })}
              key={item.id}
            >
              <Link to={`/tabs/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabId ? selectedTabId : 'Please select a tab'}
      </div>
    </>
  );
};
