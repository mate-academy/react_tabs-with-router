import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string;
  title: string;
  content: string;
}

export const Home = () => <h1>Home page here</h1>;

export const Tabs = () => {
  return (
    <>
      <h1>Tab is here</h1>
      {tabs.map(item => (
        <React.Fragment key={item.id}>
          <NavLink to={`/tabs/${item.id}`}>
            {item.title}
          </NavLink>
        </React.Fragment>
      ))}
      <Switch>
        {tabs.map(item => (
          <Route
            path={`/tabs/${item.id}`}
            render={() => <p>{item.content}</p>}
            key={item.id}
          />
        ))}
      </Switch>
    </>
  );
};
