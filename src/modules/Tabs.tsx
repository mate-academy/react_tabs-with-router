import React from 'react';
import {
  Route,
  NavLink,
} from 'react-router-dom';
import { Tab } from './Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam aliquam non! A distinctio quam enim asperiores odio. Laudantium, beatae necessitatibus. Commodi aperiam tenetur voluptatem!' },
  { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quidem necessitatibus sint, omnis nam rem.' },
  { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut fugit, officia, quis consequuntur repellat provident, nisi reprehenderit aliquam vel blanditiis deleniti nobis eveniet quod pariatur sequi repudiandae? Eligendi molestias possimus est in tempore repellat earum atque blanditiis nisi!' },
];

export const Tabs = () => (
  <div className="tab">

    {tabs.map(tab => (
      <NavLink
        to={`/tabs/${tab.id}`}
        exact
        key={tab.id}
        className="tab-item"
        activeClassName="tab__active"
      >
        {tab.title}
      </NavLink>
    ))}

    <Route path="/tabs/:id" render={() => (<Tab tabs={tabs} />)} />
  </div>
);
