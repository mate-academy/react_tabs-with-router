// Página de abas — renderizada nas rotas /tabs e /tabs/:tabId
import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';

// Lista de abas disponíveis — cada uma com id único, título e conteúdo
const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  // Extrai o tabId da URL (ex: /tabs/tab-2 → tabId = "tab-2")
  // Se a rota for apenas /tabs (sem parâmetro), tabId será undefined
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      {/*
       * Componente Tabs reutilizável e stateless:
       * - tabs: dados das abas
       * - selectedTabId: vem da URL para manter o estado na URL
       */}
      <Tabs tabs={tabs} selectedTabId={tabId} />
    </>
  );
};
