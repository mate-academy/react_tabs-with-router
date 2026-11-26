import type { Tab } from './types/Tab';

type Props = {
  selectedTab?: Tab;
};

export default function TabSelect({ selectedTab }: Props) {
  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : 'Please select a tab'}
    </div>
  );
}
