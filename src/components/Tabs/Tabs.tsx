import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const [selectedTabById, setSelectedTabById] = useState<string | null>(null);

  const activeTab
    = tabs.find(tab => selectedTabById === tab.id);

  const handleClick = (tabId: string) => {
    if (selectedTabById !== tabId) {
      setSelectedTabById(tabId);
    }
  };

  return (
    <>
      <div className="section">
        <h1 className="title">Tabs page</h1>

        <div data-cy="TabsComponent">
          <div className="tabs is-boxed">
            <ul>
              {tabs.map((tab) => {
                const { id, title } = tab;

                return (
                  <li
                    key={id}
                    className={cn({
                      'is-active': id === activeTab?.id,
                    })}
                    data-cy="Tab"
                  >
                    <NavLink
                      data-cy="TabLink"
                      to={`/tabs/${tab.id}`}
                      onClick={() => handleClick(tab.id)}
                    >
                      {title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            {selectedTabById
              ? (
                activeTab?.content
              ) : (
                'Please select a tab'
              )}
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};
