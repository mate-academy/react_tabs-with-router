import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from './Tab';

interface Props {
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const match = useRouteMatch();
  const [selectedTab, setSelectedTab] = useState('');

  const handleClick = (id: string) => {
    setSelectedTab(id);
  };

  return (
    <Router>
      <ul className="tabs-list">
        {
          tabs.map((tab: Tab) => (
            <li key={tab.id}>
              <Link
                to={`${match.url}/${tab.id}`}
                className={classNames('tab', { selected: selectedTab === tab.id })}
                onClick={() => handleClick(tab.id)}
              >
                {tab.title}
              </Link>
            </li>
          ))
        }
      </ul>

      <Switch>
        {
          tabs.map((tab: Tab) => (
            <Route path={`${match.path}/${tab.id}`}>
              {tab.content}
            </Route>
          ))
        }
      </Switch>
    </Router>
  );
};
