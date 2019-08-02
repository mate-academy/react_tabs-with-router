import React from 'react';
import Home from './components/Home'
import Tabs from './components/Tabs'

import {
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom'

class App extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs, id } = this.state;

    return (
      <div>
        <nav>
          <ul>
            <li className='menu__item'><NavLink exact to='/'>Home</NavLink></li>
            <li className='menu__item'><NavLink to="/tabs">Tabs</NavLink></li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tabs/:id?' render={({ match }) =>
            <Tabs
              tabs={tabs}
              id={match.params.id}
            />
          } />
        </Switch>
      </div>
    )
  }
};

export default App