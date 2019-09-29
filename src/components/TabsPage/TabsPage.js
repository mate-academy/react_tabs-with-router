import React from 'react';
import shortid from 'shortid';
import { TabsPageTypes } from '../../constants/proptypes';
import './TabsPage.scss';
import Tab from '../Tab/Tab';

const Tabs = ({ match, tabs }) => {
  const activeContent = tabs.find(tab => tab.id === match.params.id);

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <Tab
            key={shortid.generate()}
            title={tab.title}
            index={`tab-${i + 1}`}
            isActive={`tab-${i + 1}` === match.params.id}
          />
        ))}
      </ul>
      <p className="tab__text">
        {activeContent && activeContent.content}
      </p>
    </>
  );
};

Tabs.propTypes = TabsPageTypes;

export default Tabs;
