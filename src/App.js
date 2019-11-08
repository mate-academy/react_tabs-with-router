import React from 'react';
import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Penal from './components/Penal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
        { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
        { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;

    const HomePage = () => <h1>Home page</h1>;

    const TabsPage = () => (
      <>
        <TabsHeader />
        <Penal tabs={tabs} />
      </>
    );

    const TabsHeader = () => <h2>Tabs</h2>;

    return (
      <div className="App">
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          <button type="button" className="mainButton">
          Home
          </button>
        </NavLink>

        <NavLink
          to="/tabs"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          <button type="button" className="mainButton">
          Tabs
          </button>
        </NavLink>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/tabs" component={TabsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
