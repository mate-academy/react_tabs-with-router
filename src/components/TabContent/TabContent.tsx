import React from 'react';
import { tabs } from '../../api/tabs';

type Props = {
  params?: string;
}
;
export const TabContent: React.FC<Props> = ({ params }) => {
  const tab = tabs.find(({ id }) => id === params);

  return (
    <div className="block" data-cy="TabContent">
      {tab?.content || 'Please select a tab'}
    </div>
  );
};
