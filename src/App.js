import React from 'react';

import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';

const App = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <div className="App">
      <HomePage />
      <TabsPage tabs={tabs} />
    </div>
  );
};

// const App = () => (
//   <div className="App">
//     <HomePage />
//     <TabsPage />
//   </div>
// );

// const HomePage = () => <h1>Home page</h1>;

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];
// const TabsPage = () => <Tabs tabs={tabs} currentTabId="tab-1" />;

// const Tabs = () => <h2>Tabs</h2>;

export default App;
