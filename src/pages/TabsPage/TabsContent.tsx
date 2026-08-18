import { useParams } from 'react-router-dom';

export const TabsContent: React.FC = () => {
  const { tabId } = useParams();
  const VALID_TABS = ['tab-1', 'tab-2', 'tab-3'];

  return (
    <>
      {tabId === 'tab-1' && (
        <div className="block" data-cy="TabContent">
          Some text 1
        </div>
      )}
      {tabId === 'tab-2' && (
        <div className="block" data-cy="TabContent">
          Some text 2
        </div>
      )}
      {tabId === 'tab-3' && (
        <div className="block" data-cy="TabContent">
          Some text 3
        </div>
      )}
      {!tabId || !VALID_TABS.includes(tabId) ? (
        <div data-cy="TabContent" className="tab-content">
          Please select a tab
        </div>
      ) : null}
    </>
  );
};
