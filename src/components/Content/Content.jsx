import React from 'react';
import { useRouteMatch, useLocation } from "react-router-dom";

export const Content = ({ match, tabs }) => {
  return (
    <div className="content">
      {tabs.find(tab => tab.id === match.params.id).content}
    </div>
  )
}