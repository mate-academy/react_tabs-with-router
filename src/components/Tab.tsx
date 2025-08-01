import { Tab as TabType } from '../types/Tab';

type Props = {
  activeTab: TabType;
};

export const Tab: React.FC<Props> = ({ activeTab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {activeTab.content}
    </div>
  );
};
