import { Tab } from '../../types/Tab';

type TabProps = {
  tab: Tab;
};

export const TabPage: React.FC<TabProps> = ({ tab: { content } }) => {
  return (
    <>{content}</>
  );
};
