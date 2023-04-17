import { FC } from 'react';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { getTabById } from '../helpers';

type Props = {
  tabs: Tab[],
};

export const Tabs: FC<Props> = (
  {
    tabs,
  },
) => {
  const { tabId = '' } = useParams();
  const selectedTab = getTabById(tabs, tabId);
  const isTabSelected = (tab: Tab) => tab.id === tabId;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={classNames(
                  { 'is-active': isTabSelected(tab) },
                )}
                data-cy="Tab"
              >
                <Link
                  to={`../${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block fancy-text" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
