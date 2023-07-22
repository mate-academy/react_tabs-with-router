import { FC } from 'react';
import cn from 'classnames';
import {
  Link,
  useParams,
} from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
}

export const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find((tab: Tab) => tab.id === tabId);

  const content = selectedTab ? selectedTab.content : 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === tabId })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
