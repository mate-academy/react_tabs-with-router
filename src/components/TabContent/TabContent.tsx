import { FC } from 'react';

interface Props {
  content: string | '';
}

export const TabContent: FC<Props> = ({ content }) => {
  return (
    <div className="block" data-cy="TabContent">
      {content || 'Please select a tab'}
    </div>
  );
};
