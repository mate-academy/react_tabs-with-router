import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import Tab from './Tab';

const text1 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Culpa dolores earum eligendi, est excepturi expedita fuga harum ipsa 
  laborum minima perferendis quam quos ratione reiciendis, 
  rerum suscipit tempora tempore voluptatum!`;

const text2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Aperiam at consequatur deleniti, doloribus error harum, impedit iusto magnam 
  nostrum officiis perferendis ratione reprehenderit repudiandae 
  sint sit suscipit tempora vel vitae!`;

const text3 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Deserunt dolore ducimus, est ex excepturi ipsum libero natus praesentium, 
  quia, quos repellat rerum sequi sit ullam unde veniam vitae voluptatum? 
  Excepturi?`;

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: text1,
  },
  {
    id: 'tab-2', title: 'Tab 2', content: text2,
  },
  {
    id: 'tab-3', title: 'Tab 3', content: text3,
  },
];

const Tabs = ({ match }) => (
  <section className="tabs">
    {tabs.map(tab => (
      <NavLink
        className="tabs__link"
        activeClassName="tabs__link tabs__link--active"
        to={`${match.path}/${tab.id}`}
        key={tab.id}
      >
        {tab.title}
      </NavLink>
    ))}
    <div className="tabs__content">
      <Switch>
        {tabs.map(oneTab => (
          <Route
            path={`${match.path}/${oneTab.id}`}
            key={oneTab.id}
            render={() => (
              <Tab currentTab={oneTab} />
            )}
          />
        ))}
      </Switch>
    </div>
  </section>
);

Tabs.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
export default Tabs;
