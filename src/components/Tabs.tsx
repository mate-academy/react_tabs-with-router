import React, { FC } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { TabsItem } from './TabsItem';

import 'bootswatch/dist/spacelab/bootstrap.min.css';
import './App/App.css';


const tabs: tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Props extends RouteComponentProps<{ tabId: string; url: string; path: string;}> {
  tabId: string;
}


export const Tabs: FC<Props> = ({ match }) => {
  const contentTabs = tabs.find(el => el.id === match.params.tabId)?.content as string;
console.log(match.url, match.path);
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav container">
          {tabs.map(tab => (
            <li key={tab.id}>
              <NavLink
                className="nav-link btn-block"
                activeClassName="btn btn-secondary"
                to={
                  `/tabs/${tab.id}`
                }
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <TabsItem content={contentTabs} />
    </main>


  );
};
