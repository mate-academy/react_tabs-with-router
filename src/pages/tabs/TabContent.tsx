import { useParams } from 'react-router-dom';

export const TabContent: React.FC<{}> = () => {
  const tabId = useParams();

  return (
    <>
      <div className="block" data-cy="TabContent">
        {tabId}
      </div>
    </>
  );
};
