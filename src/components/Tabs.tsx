import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

const Tabs: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': currentTab?.id === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {currentTab ? (
        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};

export default Tabs;
