import { FC } from 'react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const Page: FC<Props> = ({ title, children }) => (
  <>
    <h1 className="title">{title}</h1>
    {children}
  </>
);
