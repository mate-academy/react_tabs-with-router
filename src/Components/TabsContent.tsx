import React from 'react';
import { tabs } from '../data/tabs';

type Props = {
  params: string,
};

export const TabsContent: React.FC<Props> = ({ params }) => {
  const tab = tabs.find(({ id }) => id === params);
  const text = tab?.content || 'Please select a tab';

  return (
    <div className="block" data-cy="TabContent">
      {text}
    </div>
  );
};
