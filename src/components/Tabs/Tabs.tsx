import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Tab } from '../../types/Tab';
import { findId } from '../../helpers/helpers';

type Props = {
  tabs: Tab[],
  selectedTabId?: string,
};

export const Tabs: FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
  } = props;

  const selectedTab = findId(tabs, selectedTabId);

  return (
    <>
      <div className="tabs is-boxed" data-cy="TabsComponent">
        <ul>
          {tabs.map((tab) => {
            const {
              id,
              title,
            } = tab;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={classNames({
                  'is-active': id === selectedTabId,
                })}
              >
                <Link to={`/tabs/${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
