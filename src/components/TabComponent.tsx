import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { TabLink } from './TabLink';

import { Tab } from '../types/Tab';

interface Props {
  tab: Tab;
}

export const TabComponent: React.FC<Props> = ({ tab }) => {
  const { tabId: selectedTabId = '' } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames(
        { 'is-active': tab.id === selectedTabId },
      )}
    >
      <TabLink tab={tab} />
    </li>
  );
};
