import cn from 'classnames';
import { Active } from '../types/Active';
import { Tab } from '../types/Tab';

export const getLinkClass = ({ isActive }: Active) =>
  cn('navbar-item', { 'is-active': isActive });

export const getContentTab = (tabs: Tab[], correctTabId: string) =>
  tabs.find(tab => correctTabId === tab.id)?.content || 'Please select a tab';
