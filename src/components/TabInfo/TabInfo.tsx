/* eslint-disable @typescript-eslint/indent */
type Props = {
  tab:
    | {
        id: string;
        title: string;
        content: string;
      }
    | undefined;
};

export const TabInfo: React.FC<Props> = ({ tab }) => {
  return (
    <div className="block" data-cy="TabContent">
      {!tab && 'Please select a tab'}
      {tab && tab.content}
    </div>
  );
};
