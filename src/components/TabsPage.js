import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import Tabs from './Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <>
    <Link to="../" className="negative ui button">GO BACK HOME</Link>
    <div className="ui attached tabular menu">
      {tabs.map(tab => <NavLink key={tab.id} className={`${match.params.id === tab.id ? 'active' : ''} item`} to={`/tabs/${tab.id}`}>{tab.title}</NavLink>)}
    </div>
    <Tabs tabs={tabs} match={match} />
  </>
);

export default TabsPage;
