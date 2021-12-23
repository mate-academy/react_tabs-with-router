import { FC } from 'react';
import { useParams } from 'react-router-dom';

type TabInfoProps = {
  tabs: {
    id: string,
    content: string,
  }[],
};

export const TabInfo: FC<TabInfoProps> = ({ tabs }) => {
  const { '*': tabID } = useParams();

  return (
    <div>
      {tabs.find(el => el.id === tabID)?.content}
    </div>
  );
};
