import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


export const TabPage = ({ tabs }) => {
  const { tabId } = useParams();
  const tab = tabs.find(tab => tab.id === tabId);

  return(
    <div>
      {tab
      ?tab.content
      :<p>Page not found</p>}
    </div>
  );
};
