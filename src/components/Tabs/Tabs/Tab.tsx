import { useParams } from 'react-router-dom';
import { TabType } from '../../../types/Tab';

interface Props {
  tabs: TabType[],
}

export const Tab: React.FC<Props> = ({
  tabs,
}) => {
  const { id } = useParams();
  const findId = tabs.find((tab: TabType) => (
    tab.id === id
  ));

  return (
    <p key={findId?.id}>{findId?.content}</p>
  );
};
