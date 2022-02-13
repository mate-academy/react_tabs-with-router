import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { getTab } from '../../api';

export const TabInfo: FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const tab = getTab(tabId);

  if (!tab) {
    return (
      <div className="box">
        <h3 className="content">There is no tab with such id!!!</h3>
      </div>
    );
  }

  return (
    <div className="box">
      {tab.content}
    </div>
  );
};
