import classNames from "classnames";
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../App';
import React from "react";

export const Tabs = () => {
  const { tabsId } = useParams<{ tabsId: string }>();

  const selectedId = tabsId ?? 0;
  const currentTab = tabs.find(tab => tab.id === selectedId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="container">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': tab.id === selectedId,
                })}
                key={tab.id}
              >
                <Link to={
                  `/tabs/${tab.id}`}>{tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {currentTab ? currentTab.content : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
