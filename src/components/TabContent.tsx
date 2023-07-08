import { FC, ReactNode } from 'react';

type Props = {
  children: string | ReactNode,
};

export const TabContent: FC<Props> = ({ children }) => (
  <div className="block" data-cy="TabContent">
    {children}
  </div>
);
