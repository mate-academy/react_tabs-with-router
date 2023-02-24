import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} tabId={tabId} />

      {/* <div className="tabs is-boxed"> */}
      {/*  <ul> */}
      {/*    <li data-cy="Tab" className="is-active"> */}
      {/*      <a href="#/">Tab 1</a> */}
      {/*    </li> */}
      {/*    <li data-cy="Tab"> */}
      {/*      <a href="#/">Tab 2</a> */}
      {/*    </li> */}
      {/*    <li data-cy="Tab"> */}
      {/*      <a href="#/">Tab 3</a> */}
      {/*    </li> */}
      {/*  </ul> */}
      {/* </div> */}

      {/* <div className="block" data-cy="TabContent"> */}
      {/*  Please select a tab */}
      {/* </div> */}
    </>
  );
};
