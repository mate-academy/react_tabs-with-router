import { useOutletContext } from 'react-router-dom';

type Tab = {
  title: string,
  content: string,
} | undefined;

export const TabDetailsPage = () => {
  const selectedTab = useOutletContext<Tab>();

  return (
    <>
      {selectedTab
        ? (
          <>
            <h2>{selectedTab.title}</h2>
            <h2>{selectedTab.content}</h2>
          </>
        )
        : (<h2>Tab not found</h2>)}
    </>
  );
};
