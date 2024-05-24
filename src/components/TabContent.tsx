import { Tab } from '../types/Tab';

type Props = {
  currentTab?: Tab;
};

export const TabContent: React.FunctionComponent<Props> = ({ currentTab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {currentTab ? currentTab.content : 'Please select a tab'}
    </div>
  );
};
