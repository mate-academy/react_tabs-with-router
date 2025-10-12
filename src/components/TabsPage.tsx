import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Tabs } from './Tabs';
import { Tab } from '../types/Tab';

const defaultTabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  // procura a tab pelo id (se tabId não existir ou não corresponder, active será null)
  const active = tabId ? defaultTabs.find(t => t.id === tabId) || null : null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      {/* Componente de abas - ao clicar atualiza a URL para /tabs/:tabId */}
      <Tabs tabs={defaultTabs} activeTabId={active ? active.id : null} />

      <div className="block" data-cy="TabContent">
        {active ? active.content : 'Please select a tab'}
      </div>

      {/* Outlet para suportar rotas aninhadas se você quiser renderizar algo extra */}
      <Outlet />
    </>
  );
};
