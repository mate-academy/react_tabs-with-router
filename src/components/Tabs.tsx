// Componente reutilizável de abas — stateless (sem estado interno, só props)
// Baseado no padrão do repositório mate-academy/react_tabs
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

// Props do componente Tabs
type Props = {
  // Lista de abas disponíveis
  tabs: Tab[];
  // ID da aba selecionada atualmente (vem da URL via useParams)
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  // Busca a aba correspondente ao selectedTabId
  // Se não encontrar (ID inválido ou ausente), selectedTab será undefined
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              // Adiciona 'is-active' no <li> quando a aba está selecionada
              className={tab.id === selectedTabId ? 'is-active' : ''}
            >
              {/* Link atualiza a URL para /tabs/{id} sem recarregar a página */}
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mostra o conteúdo da aba selecionada, ou mensagem padrão */}
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
