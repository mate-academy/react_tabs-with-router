import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { FC } from 'react';
import cn from 'classnames';

interface Props {
  tabs: Tab[];
}

export const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={cn({ 'is-active': activeTab?.id === tab.id })}
                key={tab.id}
              >
                <Link to={`../${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
