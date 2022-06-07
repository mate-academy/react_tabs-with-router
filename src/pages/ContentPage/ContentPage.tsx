type Props = {
  tabContent?: string,
};

export const ContentPage: React.FC<Props> = ({ tabContent }) => {
  return (
    <div className="content">
      <p>{!tabContent ? '' : tabContent}</p>
    </div>
  );
};
