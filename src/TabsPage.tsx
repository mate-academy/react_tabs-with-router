import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { tabs } from './api';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;

export const TabsPage: TabsPageProps = ({ match }) => {
  const [content, setContent] = useState('');
  const tabId:string | null = match.params.tabId || null;
  
  useEffect(()=>{
    const text = tabs.find(tab => tab.id === tabId)
    setContent(text ? text.content : 'Please select tab!')
    
  }, [tabId])

  return (
    <>
      <h1>Tabs</h1>
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <NavLink
              className="nav-link"
              to={`/tabs/${tab.id}`}
            >{tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
     <p>{content}</p>
    </>
  );
};
