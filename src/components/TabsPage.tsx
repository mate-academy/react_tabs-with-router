import React from 'react';
import { Tabs } from './Tabs';

const tabs: Tab[] = [
  {
    id: 'tab-1',
    title: 'HTML',
    content: 'Hyper-Text Markup Language is used to put '
      + 'the structure of a website together. '
      + '(Like a skeleton of a body)',
  },
  {
    id: 'tab-2',
    title: 'CSS',
    content: 'Cascading Style Sheets acts like makeup for '
      + 'the HTML. CSS improves the colors and layout of a website '
      + 'structure built with HTML.',
  },
  {
    id: 'tab-3',
    title: 'JavaScript',
    content: 'JavaScript is a full-on programming language '
      + 'that adds interactivity and functionality to a website.',
  },
];

export const TabsPage = () => {
  return (
    <>
      <h1>Tabs</h1>
      <Tabs
        tabs={tabs}
        currentTabId="tab-2"
      />
    </>
  );
};
