import { PageNavLink } from './PageNavLink';
import { tabs } from '../api/tabs';

export type Props = {
  chosenTabId: string | undefined,
};

export const TabsList: React.FC<Props> = ({ chosenTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <PageNavLink
          tab={tab}
          nestingLevel={2}
          chosenTabId={chosenTabId}
        />
      ))}
    </ul>
  </div>
);
