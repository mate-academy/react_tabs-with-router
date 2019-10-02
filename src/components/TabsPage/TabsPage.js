import React from 'react';
import { TabsPageProps } from '../../constants/proptypes';
import Tab from '../Tab/Tab';

import './TabsPage.css';

const TabsPage = (props) => {
  const { tabs, currentTabId } = props;

  return (
    <div className="tabs">
      <h2>Tabs</h2>
      <ul className="tabs-list">
        {tabs.map(({ id, title, content }) => (
          <Tab
            id={id}
            key={id}
            title={title}
            content={content}
            isActive={id === currentTabId}
          />
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map(({ id, content }) => {
          if (id !== currentTabId) {
            return undefined;
          }

          return (
            <p
              key={id}
              className="tab-content__item"
            >
              {content}
            </p>
          );
        })}
      </div>
    </div>
  );
};

TabsPage.propTypes = TabsPageProps;

export default TabsPage;
