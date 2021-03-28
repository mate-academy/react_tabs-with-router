import React from "react";
import { useParams } from 'react-router-dom';


export const TabPage = ({ tabs }) => {
  const { tabId } = useParams();
  return(
    <div>
      {tabs.find(tab => tab.id === tabId).content}
    </div>
  );
};
