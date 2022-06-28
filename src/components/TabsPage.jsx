import React from 'react';
import '../App.scss';
import {
  useParams,
  NavLink,
} from 'react-router-dom';
import TabsContent from './TabsContent';

const TabsPage = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <div
        className="tab_wrapper"
      >
        {tabs.map(tab => (
          <NavLink
            to={tab.id}
            key={tab.id}
            className="tab_btn"
          >
            {tab.title}
          </NavLink>
        ))
        }
      </div>

      {tabId
        ? (
          <TabsContent
            tabs={tabs}
            tabId={tabId}
          />
        )
        : null
      }
    </>
  );
};

export default TabsPage;
