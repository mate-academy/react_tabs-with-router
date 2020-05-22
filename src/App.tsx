import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  {
    id: 'tab-1',
    title: 'Thailand',
    content: `Королевство Таиланд — гостеприимная земля,
              неофициальным названием которой является «Страна улыбок».`,
  },
  {
    id: 'tab-2',
    title: 'Sri Lanka',
    content: `В Шри-Ланке собирают 305 миллионов килограмм чая
              в год – это 10% от всего мирового производства.`,
  },
  {
    id: 'tab-3',
    title: 'Bali',
    content: `Вопреки распространённому среди
              российских туристов произношению,
              ударение в слове «Бали» ставится
              на первый слог, а не на последний.`,
  },
];

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Switch>
          <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route
            path="/tabs/:id?"
            render={({ match }) => (
              <Tabs tabs={tabs} tabId={match.params.tabId} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
