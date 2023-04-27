import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: FC<Props> = ({
  tabs,
}) => {
  const { tabId = 'tab-0' } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === tabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab
          ? activeTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
