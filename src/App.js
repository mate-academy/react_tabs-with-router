import React, { Component } from 'react';
import './App.css';
import { Menu } from 'semantic-ui-react';
import {
  BrowserRouter, NavLink, Route, Switch,
} from 'react-router-dom';
import Tabs from './components/Tabs';
import Home from './components/Home';

const tabs = [
  { title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' },
  { title: 'Tab 2', content: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.' },
  { title: 'Tab 3', content: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.' },
];

function addId(tabsAll) {
  let counter = 1;

  return tabsAll.map((tab) => {
    const tabWithId = { ...tab, id: `tab-${counter}` };

    counter += 1;

    return tabWithId;
  });
}

class App extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="wrapper">
        <BrowserRouter>
          <Menu pointing secondary>
            <NavLink
              exact
              to="/"
            >
              <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
            </NavLink>

            <NavLink
              to="/tabs"
            >
              <Menu.Item
                name="tabs"
                active={activeItem === 'tabs'}
                onClick={this.handleItemClick}
                to="/tabs"
              />
            </NavLink>
          </Menu>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/tabs"
              render={({ match }) => (
                <Tabs match={match} tabs={addId(tabs)} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
