import React, { useContext } from 'react';

export const TabsContext = React.createContext();

const TabContent = () => {
  const value = useContext(TabsContext);
  const { tabId, tabs } = value;

  return (
    <>
      {tabs.map(({ id, content }) => (id === tabId ? content : null))}
    </>
  );
};

export default TabContent;
