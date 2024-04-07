import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import cn from 'classnames';

type Props = {
  tabs: Tab[];
};

export const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const isValidTabId = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {!isValidTabId ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === tabId)?.content}
        </div>
      )}
    </>
  );
};
