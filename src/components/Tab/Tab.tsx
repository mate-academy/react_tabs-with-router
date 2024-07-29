interface Props {
  tabContent: string;
}

export const Tab: React.FC<Props> = ({ tabContent }) => (
  <div className="block" data-cy="TabContent">
    {tabContent}
  </div>
);
