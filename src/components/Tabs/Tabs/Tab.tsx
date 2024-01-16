import { useParams } from 'react-router-dom';
import { TabType } from '../../../types/Tab';

interface Props {
  tabs: TabType[],
}

export const Tab:React.FC<Props> = ({
  tabs,
}) => {
  const { id } = useParams();

  return (
    <>
      {tabs.map((tab: TabType) => (
        tab.id === id ? <p key={tab.id}>{tab.content}</p> : null
      ))}
    </>
  );
};
