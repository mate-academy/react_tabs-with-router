import classNames from 'classnames';
import { tabs } from '../store/context';

export const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

export const getContent = (TabId: string) => {
  const selectedTab = tabs.find(tab => tab.id === TabId);

  if (selectedTab) {
    return selectedTab.content;
  }

  return 'Please select a tab';
};
