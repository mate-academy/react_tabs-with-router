/* eslint-disable react/jsx-filename-extension */
import { NavLink } from 'react-router-dom';
import './TabsPage.css';

export const TabsPage = ({ match }: any) => {
  const selectedTabId = match.params.tabId;

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <>
      <div className="tab__list">
        {tabs.map(tab => (
          <NavLink key={tab.id} to={`/tabs/${tab.id}`} activeClassName="is-active">
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className="content">{tabs.find(tab => tab.id === selectedTabId)?.content || 'Please select a tab'}</div>
    </>
  );
};
