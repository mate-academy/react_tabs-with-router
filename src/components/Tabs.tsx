import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
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
            <li key={tab.id} className="tab">
              <Link
                to={`${match.url}/${tab.id}`}
                className={selectedTab === tab.id ? 'selected' : ''}
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
