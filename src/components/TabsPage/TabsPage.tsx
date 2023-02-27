import { FC } from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
}

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId: selectedTabId } = useParams();

  const selectedTabContent = tabs
    .find(tab => tab.id === selectedTabId)?.content || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={cn({
                  'is-active': tab.id === selectedTabId,
                })}
                key={tab.id}
              >
                <Link to={`../${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent || 'Please select a tab'}
      </div>
    </>
  );
};
