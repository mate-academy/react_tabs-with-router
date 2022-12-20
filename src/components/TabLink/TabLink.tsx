import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
  onSetTabContent: React.Dispatch<React.SetStateAction<string>>,
}

export const TabLink: React.FC<Props> = ({ tab, onSetTabContent }) => {
  const { id, title, content } = tab;
  const { tabId } = useParams();

  useEffect(() => {
    if (tabId === id) {
      onSetTabContent(content);
    }
  }, [tabId]);

  return (
    <li
      data-cy="Tab"
      className={tabId === id ? 'is-active' : ''}
    >
      <Link to={`/tabs/${id}`}>
        {title}
      </Link>
    </li>
  );
};
