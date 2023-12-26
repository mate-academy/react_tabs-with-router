import { FC, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { Content } from './Content';

type Props = {
  tabs: Tab[]
};

export const Tabs: FC<Props> = ({ tabs }) => {
  const [selectTab, setSelectTab] = useState('');

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': tab.id === selectTab,
              })}

            >
              <NavLink
                to={`/tabs/${tab.id}`}
                className={({ isActive }) => {
                  if (isActive) {
                    setSelectTab(tab.id);
                  }

                  return '';
                }}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Routes>
          <Route path=":tabId" element={<Content tabs={tabs} />} />
          <Route path="" element={<>Please select a tab</>} />
        </Routes>
      </div>

    </>
  );
};
