import React, { FC } from 'react';
// import { TabsInterface } from '../../interfaces';

interface TabProps {
  content: string;
}

export const Tab: FC<TabProps> = ({ content }) => (
  <div id="myTabContent" className="tab-content">
    <div className="tab-pane fade show active" id="home">
      <p>
        {content}
      </p>
    </div>
  </div>
);
