import { Tab } from '../../types/Tab';

type Props = {
  selectedTab: Tab | undefined,
};

export const TabContent: React.FC<Props> = ({ selectedTab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : 'Please select a tab'}
    </div>
  );
};
