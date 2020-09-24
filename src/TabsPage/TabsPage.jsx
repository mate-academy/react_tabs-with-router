import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import {Tabs} from './components/Tabs'



const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

 export const TabsPage = () => {
  const [id, setId] = useState(tabs[0].id);
  return (
    <>
      <h2>Tabs page</h2>
      {/* <Route path="/:tabsId" render={()=>  */}
        <Tabs tabs={tabs} currentTabId={id} setId={setId}/>
        {/* }
      /> */}
    </>
  );
 }

