import React, { FC } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  tabId: string;
}
interface Props {
  tabs: Tabs[];
  props: RouteComponentProps<MatchParams>;
}

export const Tabs: FC<Props> = ({ tabs, props: { match } }) => {
  const tabContent = tabs.find(tab => tab.id === match.params.tabId);

  return (
    <>
      <ul className="nav">
        {tabs.map(tab => (
          <li className="nav__item nav__item--tabs">
            <NavLink to={`/tabs/${tab.id}`} key={tab.id}>
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <p>{tabContent?.content}</p>
    </>
  );
};
