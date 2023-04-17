interface Props {
  tabTitle?: string;
}

export const TabContent: React.FC<Props> = ({
  tabTitle = 'Please select a tab',
}) => (
  <div className="block" data-cy="TabContent">
    {tabTitle}
  </div>
);
