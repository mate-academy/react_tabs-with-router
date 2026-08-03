import React from 'react';
import cn from 'classnames';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

interface Props {
  number: Tab | null;
  setNumber: (Tab: Tab) => void;
  Tabs: Tab[];
}

export const Tabss: React.FC<Props> = ({ number, setNumber, Tabs }) => {
  const { tabId } = useParams<{ tabId?: string }>();
  const selectedTab = Tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li
            data-cy="Tab"
            className={cn({ 'is-active': number?.id === 'tab-1' })}
            onClick={() => {
              setNumber(Tabs[0]);
            }}
          >
            <Link to="/tabs/tab-1">Tab 1</Link>
          </li>
          <li
            data-cy="Tab"
            className={cn({ 'is-active': number?.id === 'tab-2' })}
            onClick={() => {
              setNumber(Tabs[1]);
            }}
          >
            <Link to="/tabs/tab-2">Tab 2</Link>
          </li>
          <li
            data-cy="Tab"
            className={cn({ 'is-active': number?.id === 'tab-3' })}
            onClick={() => {
              setNumber(Tabs[2]);
            }}
          >
            <Link to="/tabs/tab-3">Tab 3</Link>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!selectedTab ? 'Please select a tab' : selectedTab.content}
      </div>
    </>
  );
};
