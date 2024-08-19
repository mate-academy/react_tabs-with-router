import { Link, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();
  let selectedTabId = tabId ? tabId.replace('tab-', '') : '';

  if (+selectedTabId > 3) {
    selectedTabId = ''
  }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {[1, 2, 3].map(tab => (
            <li
              key={tab}
              data-cy="Tab"
              className={selectedTabId === String(tab) ? 'is-active' : ''}
            >
              <Link to={`/tabs/tab-${tab}`}>Tab {tab}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId ? `Some text ${selectedTabId}` : 'Please select a tab'}
      </div>
    </>
  );
};
