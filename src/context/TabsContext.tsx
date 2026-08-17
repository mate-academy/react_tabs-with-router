import { createContext } from 'react';
import { Tab } from '../types/Tab';

export const TabsContext = createContext<Tab[]>([]);
