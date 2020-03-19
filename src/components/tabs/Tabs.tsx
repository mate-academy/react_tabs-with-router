import React, { FC } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { Tab } from './tab';

interface MatchParams {
  tabsId: string;
}
interface Props {
  tabs: Tabs[];
  props: RouteComponentProps<MatchParams>;
}

export const Tabs: FC<Props> = ({ tabs, props: { match } }) => {

  console.log(tabs, match);

  return (
    <>
      <h1>{match.params.tabsId}</h1>
      <ul className="nav">
        {tabs.map(tab => (
          <li className="nav__item nav__item--tabs">
            <NavLink to={`${match.path}${tab.id}`} key={tab.id}>
              {tab.title}
            </NavLink>
            <Tab tab={tab} />
          </li>
        ))}
      </ul>

    </>
  );
};
