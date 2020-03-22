/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { tabs } from '../api';
import { Tab } from '../interfaces';

interface Props {
  tabs?: Tab[];
}

export const Tabs: FC<Props> = () => (
  <>
    <NavLink to={`/tabs/${tabs[0].id}`} className="tab__link">{tabs[0].title}</NavLink>
    <NavLink to={`/tabs/${tabs[1].id}`} className="tab__link">{tabs[1].title}</NavLink>
    <NavLink to={`/tabs/${tabs[2].id}`} className="tab__link">{tabs[2].title}</NavLink>

    <Route path={`/tabs/${tabs[0].id}`} component={Tab1} />
    <Route path={`/tabs/${tabs[1].id}`} component={Tab2} />
    <Route path={`/tabs/${tabs[2].id}`} component={Tab3} />
  </>
);

const Tab1 = () => (
  <p>{tabs[0].content}</p>
);
const Tab2 = () => (
  <p>{tabs[1].content}</p>
);
const Tab3 = () => (
  <p>{tabs[2].content}</p>
);
