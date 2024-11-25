import React from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

export const TabsProvider = React.createContext<Tab[]>([]);
