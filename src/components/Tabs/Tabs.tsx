import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
};

export const Tabs: React.FC<Props> = ({ tab }) => {
  return <div>{tab.content}</div>;
};
