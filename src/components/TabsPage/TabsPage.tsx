import { useState } from 'react';
import {
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import { TabInfo } from '../TabInfo';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const [, setId] = useState('');

  return (
    <>
      <ul>
        {tabs.map(el => {
          return (
            <NavLink
              to={`/tabs/${el.id}`}
              className="tab__link"
              key={el.id}
              onClick={() => setId(el.id)}
            >
              <li>
                <Routes>
                  <Route
                    path={`${el.id}`}
                    element={
                      (
                        <TabInfo
                          tabs={tabs}
                        />
                      )
                    }
                  />
                </Routes>
                {el.title}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};
