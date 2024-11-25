import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TabContext } from '../context/Store';

export const TabContent = () => {
  const tabs = useContext(TabContext);
  const { id } = useParams();

  return (
    <div className="block" data-cy="TabContent">
      {tabs.map(tab => {
        return tab.id === id && tab.content;
      })}
    </div>
  );
};
