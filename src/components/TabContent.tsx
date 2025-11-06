type Props = {
  content: string;
};
export default function TabContent({ content }: Props) {
  return (
    <div className="block" data-cy="TabContent">
      {content}
    </div>
  );
}
