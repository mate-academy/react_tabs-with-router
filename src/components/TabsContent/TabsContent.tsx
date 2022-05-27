import { FC } from 'react';

interface Props {
  content: string,
}

export const TabsContent: FC<Props> = ({ content }) => {
  return (
    <p className="tabs__content">{content}</p>
  );
};
