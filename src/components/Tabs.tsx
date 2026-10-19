import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { NavItem } from './NavItem';
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');

    return () => {
      document.documentElement.classList.remove('has-navbar-fixed-top');
    };
  }, []);

  return (
    <div>
      <h1 className="title">Tabs page</h1>{' '}
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <NavItem key={tab.id} to={tab.id} label={tab.title} />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        <Routes>
          {tabs.map(tab => (
            <Route
              key={tab.id}
              path={tab.id}
              element={<div>{tab.content}</div>}
            />
          ))}

          <Route path="*" element={<div>Please select a tab</div>} />
        </Routes>
      </div>
    </div>
  );
};
