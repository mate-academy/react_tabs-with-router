import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string | undefined,
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId }) => {
  const currentTab: Tab | undefined = tabs.find(({ id }) => (
    id === selectedTabId
  ));

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={
                tab.id === selectedTabId
                  ? 'is-active'
                  : ''
              }
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={`../${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
