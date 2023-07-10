import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
}

export const TabsList: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const isSelected = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': selectedTabId === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {selectedTabId === 'tab-0' ? (
        <p>Please select tab</p>
      ) : (
        <p>{isSelected?.content}</p>
      )}
    </>
  );
};
