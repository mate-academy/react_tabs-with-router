// src/pages/TabsPage.tsx
import { useParams } from 'react-router-dom';
import TabsComponent from '../components/TabsComponent';
import { tabs } from '../data/tabs';
import { Tab } from '../types/Tab';

export default function TabsPage() {
  const { tabId } = useParams<{ tabId?: string }>();

  const selected: Tab | undefined = tabId
    ? tabs.find(t => t.id === tabId)
    : undefined;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsComponent />

      {tabId && selected && (
        <h2 className="subtitle" data-cy="TabTitle">
          {selected.title}
        </h2>
      )}

      <div className="block" data-cy="TabContent">
        {!tabId || !selected ? (
          <p data-cy="TabEmpty">Please select a tab</p>
        ) : (
          <p data-cy="TabText">{selected.content}</p>
        )}
      </div>
    </>
  );
}
