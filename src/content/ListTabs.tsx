import { useMatch } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { NotFound } from './NotFound';

export const ListTabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const searchLine = useMatch('/tabs/:tab');
  const searchTab = tabs.find((tab) => tab.id === searchLine?.params.tab);

  if (searchTab) {
    return (
      <div className="block" data-cy="TabContent">
        {searchTab.content}
      </div>
    );
  }

  return (
    <NotFound />
  );
};
