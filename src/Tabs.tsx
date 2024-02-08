import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams();
  const selectedTab = tabId;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((value) => (
            <React.Fragment key={value.id}>
              <li
                data-cy="Tab"
                className={cn({
                  'is-active': value.id === selectedTab,
                })}
              >
                <Link to={`/tabs/${value.id}`}>{value.title}</Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};
