import React, { useMemo } from "react";
import { NavLink, useRouteMatch } from 'react-router-dom';

import { Content } from "./Content";
import { Message } from './Message';

import { Tab, Obj } from '../Types';

export const TabItem: React.FC<Obj> = ({tabs, tabId}) => {
  const match = useRouteMatch();

  const findValue = (): Tab | undefined => {
    return tabs.find(tab=>tab.id === tabId);
  }
  const memoizedValue: Tab | undefined = useMemo(findValue, [tabId]);
    
  return (
    <>
      <div className="tabs is-centered">
        <ul>
          {tabs.map(tab =>(
            <NavLink key={tab.id}
             className="navbar-item is-tab"
             activeClassName="is-active"
             to={`${match.url}/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          ))}        
        </ul>
      </div>
      <p>{memoizedValue === undefined 
          ? (<Message/>)
          : (<Content 
              content={memoizedValue.content}
             />)
         }
      </p>    
    </>
  )        
} 
