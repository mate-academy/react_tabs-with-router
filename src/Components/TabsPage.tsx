import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const getTabsClass = ({ isActive }: { isActive: boolean }) =>
  classNames('block', {
    'is-active': isActive,
  });

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

export const TabsPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li
            data-cy="Tab"
            className={getTabsClass({ isActive: activeTab === 1 })}
            onClick={() => setActiveTab(1)}
          >
            <Link to="#/">Tab 1</Link>
          </li>
          <li
            data-cy="Tab"
            className={getTabsClass({ isActive: activeTab === 2 })}
            onClick={() => setActiveTab(2)}
          >
            <Link to="#/">Tab 2</Link>
          </li>
          <li
            data-cy="Tab"
            className={getTabsClass({ isActive: activeTab === 3 })}
            onClick={() => setActiveTab(3)}
          >
            <Link to="#/">Tab 3</Link>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    </>
  );
};
