import React from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => (
  <div>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.title}
        className="app__tab"
        // { app__tab_selected: tab.content === currentContent },
        // onClick={() => (
        //   onSelected(tab.content)
        // )}
      >
        {tab.title}
      </button>
    ))}
  </div>
);
