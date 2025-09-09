import { Link, useParams } from 'react-router-dom';
import { Tabs } from 'mate-academy/react_tabs'; // ⬅️ import da lib
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs.map(tab => ({
          title: (
            <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          ),
          id: tab.id,
        }))}
        selectedId={tabId} // controla a aba pelo URL
        renderContent={() => null} // a gente ignora o conteúdo da lib
      />

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
