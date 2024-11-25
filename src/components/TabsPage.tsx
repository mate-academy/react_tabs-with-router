import { Tab } from './Tab';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: { id: string; title: string; content: string }[];
};
export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : 0;
  const tabIds = tabs.map(tab => tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>

      {tabIds.includes(`${selectedTabId}`) ? (
        tabs
          .filter(tab => tab.id === selectedTabId)
          .map(selectedTodo => (
            <div key={selectedTodo.id} className="block" data-cy="TabContent">
              {selectedTodo.content}
            </div>
          ))
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
