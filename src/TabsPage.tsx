import cn from 'classnames';
import { FC } from 'react';
import { Tab } from './types/Tab';
import { Link, useParams } from 'react-router-dom';

interface Props {
  tabs: Tab[];
}

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { title, id } = tab;

            return (
              <li
                className={cn({ 'is-active': tabId === id })}
                data-cy="Tab"
                key={id}
              >
                <Link to={`/tabs/${id}`} data-cy="TabLink">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab?.content : 'Please select a tab'}
      </div>
    </>
  );
};
