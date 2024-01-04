import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsProps } from '../../types/TabsProps';

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">
        Tabs page
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                className={selectedTab?.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {selectedTab
          ? (
            <div className="block" data-cy="TabContent">
              {selectedTab.content}
            </div>
          )
          : (
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )}
      </div>
    </>
  );
};
