import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from './helper';


type Props = {
  tabs: Tab[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  return (
    <>
      <ul>
        {tabs.map(item => <li key={item.id}><NavLink to={`/tabs/${item.id}`}>{item.title}</NavLink></li>)}
      </ul>
    </>
  );
};

export default Tabs;
