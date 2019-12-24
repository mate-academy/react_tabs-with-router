/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropsTypes from 'prop-types';
import cn from 'classnames';
import Tabs from './Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => {
  const [currnetTab, changeCurrentTab] = useState(tabs[0].id);

  return (
    <>
      <ul className="tabs">
        {tabs.map(({ id, title }) => (
          <li className="tabs__link">
            <NavLink
              to={`${match.path}/${id}`}
              onClick={() => (
                changeCurrentTab(id)
              )}
              className={cn({ active: id === currnetTab })}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Tabs tabsData={tabs} currentTabId={currnetTab} />
    </>
  );
};

TabsPage.propTypes = { match: PropsTypes.objectOf.isRequired };

export default TabsPage;
