import React from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';

export const TabsDetails: React.FC = () => {
  const tabs = useOutletContext<Tab[]>();
  const { tabId } = useParams<{ tabId: string }>();
  const navigate = useNavigate();
  const tabContent = tabs.find(item => item.id === tabId);
  const findMe = tabs.some(item => item.id === tabId);

  // useEffect(() => {
  //   return () => {
  //     navigate('/tabs');
  //   };
  // }, [findMe]);
  // When i use "useEffect", to get to page "/tabs",
  //  by entering non exist tab(example: "/tabs/tab-999"),
  //  i can't stay on page with chosen tab(example: "/tabs/tab-1") when i reload page.

  return (
    <>
      {findMe ? <p>{tabContent?.content}</p> : `${navigate('/tabs')}`}
    </>
  );
};
