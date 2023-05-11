import { FC } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  setSelectedTab: (id: Tab) => void,
  selectedTabId: string,
};

export const TabsPage: FC<Props> = ({
  tabs, setSelectedTab, selectedTabId,
}) => {
  const { tabId = 'tab-0' } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  const handleTabClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                data-cy="Tab"
                key={tab.id}
                className={
                  classNames({
                    'is-active': tab.id === tabId,
                  })
                }
              >
                <Link
                  to={`/tabs/${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
