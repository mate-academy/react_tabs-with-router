import { FC, memo } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

export const Tabs: FC<Props> = memo(({ tabs }) => {
  const { tabId = 'tab-0' } = useParams();

  const chosenTab = tabs.find(tab => tab.id === tabId);
  const isMatchingTab = tabs.map(tab => tab.id).includes(tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tabId === tab.id })}
            >
              <Link to={tab.id}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isMatchingTab
          ? chosenTab?.content
          : 'Please select a tab'}
      </div>
    </>
  );
});
