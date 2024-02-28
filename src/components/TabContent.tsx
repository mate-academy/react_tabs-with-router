import { Tab } from '../types/Tab';

type Props = {
  currentTab: Tab | undefined;
};

export const TabContent: React.FC<Props> = ({ currentTab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {currentTab ? currentTab.content : 'Please select a tab'}
    </div>
  );
};
