import { useState } from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const [tab, setTab] = useState('');
  const activeTab = (tabId: string) => {
    if (tabId === tab && tabs.some(el => el.title === tab)) {
      return 'is-active';
    }

    return;
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li
            data-cy="Tab"
            className={activeTab('Tab 1')}
            onClick={() => setTab('Tab 1')}
          >
            <Link to="./tab-1">Tab 1</Link>
          </li>
          <li
            data-cy="Tab"
            className={activeTab('Tab 2')}
            onClick={() => setTab('Tab 2')}
          >
            <Link to="./tab-2">Tab 2</Link>
          </li>
          <li
            data-cy="Tab"
            className={activeTab('Tab 3')}
            onClick={() => setTab('Tab 3')}
          >
            <Link to="./tab-3">Tab 3</Link>
          </li>
        </ul>
      </div>

      {!tab ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {`Some text ${tab.match(/\d+/)}`}
        </div>
      )}
    </>
  );
};
