import { FC, memo } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: FC<Props> = memo(({ tabs }) => {
  const { tabId = '' } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);
  const content = currentTab?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === tabId;
            const { id, title } = tab;

            return (
              <li
                className={cn({
                  'is-active': isActive,
                })}
                data-cy="Tab"
                key={id}
              >
                <Link
                  to={`/tabs/${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
});
