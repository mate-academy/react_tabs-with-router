import React from 'react';
import { tabs } from '../App';
import { Tab } from '../types/Tab';

export const TabsContext = React.createContext<Tab[]>(tabs);

export const SelectedTabsContext = React.createContext<Tab['id'] | null>(null);
