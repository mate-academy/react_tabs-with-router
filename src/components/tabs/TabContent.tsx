type TabContentProps = {
  content: string;
};

export const TabContent = ({ content }: TabContentProps) => (
  <div className="block" data-cy="TabContent">
    {content}
  </div>
);
