import { useParams } from 'react-router-dom';

export const TabsContent = () => {
  const { tabId } = useParams();
  const id = tabId && tabId[tabId?.length - 1];

  return (
    <>
      <div className="block" data-cy="TabContent">
        {`Some text ${id}`}
      </div>
    </>
  );
};
