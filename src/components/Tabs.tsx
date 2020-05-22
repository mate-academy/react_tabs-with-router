import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

interface Tabs {
  [key: string]: string;
}

type Props = {
  tabs: Tabs[]
}

const Tabs: React.FC<Props> = ({ tabs }) => (
  <>
    <h2>Tabs page</h2>

    <nav>
      <ul className="nav">
        {tabs.map(tab => (
          <li className="nav__item">
            <NavLink to={`/tabs/${tab.id}`} exact className="nav__link">
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <Switch>
      {tabs.map(tab => (

      <Route path={`/tabs/${tab.id}`} exact component={
        () => <p>{tab.content}</p>
      } />
      ))}
    </Switch>
  </>
)

export default Tabs;
