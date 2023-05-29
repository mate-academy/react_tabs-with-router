import { FC } from 'react';

interface Props {
  tabContent: string;
}

export const TabContent: FC<Props> = ({ tabContent }) => (
  <div className="block" data-cy="TabContent">
    {tabContent || 'Please select a tab'}
  </div>
);
