import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cn from 'classnames';
import { tabs } from '../tabs';
import { TabContent } from './TabContent';
import { TabContext } from '../TabContext';

export const TabList = () => {
  const { selectedTab } = useContext(TabContext);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={
                  cn(
                    '',
                    { 'is-active': tab.id === selectedTab },
                  )
                }
              >
                <Link to={`${tab.id}`}>{`${tab.id}`}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <TabContent />
    </>
  );
};
