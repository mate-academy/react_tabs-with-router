type Props = {
  text: string,
};

export const TabContent: React.FC<Props> = ({ text }) => (
  <div className="block" data-cy="TabContent">
    {text}
  </div>
);
