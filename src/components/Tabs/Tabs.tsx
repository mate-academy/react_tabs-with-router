import {
  FC,
  memo,
  useMemo,
  useState,
} from 'react';
import { NavLink, useParams } from 'react-router-dom';

type Tab = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  tabs: Array<Tab>;
}

export const Tabs: FC<Props> = memo(({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const [selectedTab, setSelectedtab] = useState<Tab | null>(null);

  const isCorrectTab = useMemo(() => {
    const selectedPage = tabs.find(tab => tab.id === tabId);

    if (selectedPage) {
      setSelectedtab(selectedPage);

      return true;
    }

    return false;
  }, [tabId, selectedTab]);

  return (
    <div className="Tabs">
      {!isCorrectTab && (
        <p>
          Please select a tab
        </p>
      )}
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item" key={tab.id}>
            <NavLink
              to={tab.id}
              className="nav-link"
              onClick={() => {
                setSelectedtab(tab);
              }}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {
        isCorrectTab && (
          <p className="Tabs__tab-content">
            {selectedTab?.content}
          </p>
        )
      }
    </div>
  );
});
