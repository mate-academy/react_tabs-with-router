import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { TabsPage } from './TabsPage';
import { HomePage } from './HomePage';
import './App.css';

const App = () => (
  <>
    <div className="App">
      <h1>Tabs with router</h1>
    </div>
    <nav>
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/tabs">Tabs</NavLink></li>
    </nav>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs" component={TabsPage} />
    </Switch>
  </>
);

// const TabsPage = () => {
//   const [id, setId] = useState(tabs[0].id);
//   return (
//     <>
//       <h2>Tabs page</h2>
//       <Tabs tabs={tabs} currentTabId={id} setId={setId}/>
//     </>
//   )
// }

export default App;
