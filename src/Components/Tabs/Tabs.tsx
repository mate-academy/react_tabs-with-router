import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Tab } from '../Tab/Tab';
import { TabType } from '../interfaces/TabInterface';
import styles from './Tabs.module.css';

interface Props {
  tabs: TabType[];
  currentTabId: string;
  path: string;
}

export const Tabs: FC<Props> = (props) => {
  const { tabs, path } = props;

  return (
    <>
      <div>
        <div>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              toUrl={`${path}/${tab.id}`}
              title={tab.title}
            />
          ))}
        </div>
        <>
          {tabs.map(tab => (
            <Route
              key={tab.id}
              path={`${path}/${tab.id}`}
              render={() => (
                <div className={styles.tabs}>
                  {tab.content}
                </div>
              )}
            />
          ))}
        </>
      </div>
    </>
  );
};
