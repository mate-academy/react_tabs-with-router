import React from 'react';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  // useParams para obter o tabId da URL
  const { tabId } = useParams<{ tabId?: string }>(); // tabId pode ser undefined se não estiver na URL

  // Encontra a aba ativa baseada no tabId da URL
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              // Adiciona 'is-active' se o tab.id corresponder ao tabId da URL
              className={activeTab?.id === tab.id ? 'is-active' : ''}
            >
              {/* Usa Link para mudar a URL sem recarregar a página */}
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {/* Mostra o conteúdo da aba ativa ou a mensagem padrão */}
        {activeTab ? activeTab.content : <p>Please select a tab</p>}
      </div>
    </>
  );
};
