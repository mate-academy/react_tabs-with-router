import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { TabLink } from '../TabLink';

interface Props {
  tabs: Tab[];
  selectedId: string;
}

export const TabsList: React.FC<Props> = ({ tabs, selectedId }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({
            'is-active': selectedId === tab.id,
          })}
        >
          <TabLink tab={tab} />
        </li>
      ))}
    </ul>
  );
};
