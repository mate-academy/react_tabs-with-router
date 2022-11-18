import { FC } from 'react';

type Props = {
  text: string;
};

export const TabsContent: FC<Props> = ({ text }) => {
  return (
    <div className="block" data-cy="TabContent">
      {text}
    </div>
  );
};
