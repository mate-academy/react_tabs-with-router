import cn from 'classnames';
import { FC, memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: FC<Props> = memo(({ tabs }) => {
  const { tabId } = useParams();
  const selectedTabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="tab"
              className={cn({ 'is-active': tabId === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTabContent || 'Please select a tab'}
      </div>
    </>
  );
});
