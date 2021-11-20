import { FC } from 'react';
import { useParams } from 'react-router-dom';

type TabInfoProps = {
  id: string,
  tabs: {
    id: string,
    content: string,
  }[],
};

export const TabInfo: FC<TabInfoProps> = ({ id, tabs }) => {
  const { '*': tabID } = useParams();

  return (
    <div>
      {id === tabID ? tabs.find(el => tabID === el.id)?.content : 'nonono'}
    </div>
  );
};
