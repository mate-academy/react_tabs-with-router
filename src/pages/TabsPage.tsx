import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { id } = useParams<string>();

  return (
    <>
      <h1 className="title">Tabs Page</h1>

      <div className="tabs is-boxed">
        <Tabs
          tabs={tabs}
          selected={id || ''}
        />
      </div>

      {!id
        ? (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )
        : (
          <div className="block" data-cy="TabContent">
            {`Some text ${id.slice(-1)}`}
          </div>
        )}
    </>
  );
};
