import cn from 'classnames';
import { FC, memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
}
export const TabsPage: FC<Props> = memo(({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">

      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': tab.id === tabId,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
});
