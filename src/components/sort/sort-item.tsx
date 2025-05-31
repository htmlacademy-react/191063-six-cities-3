type SortItemProps = {
  title: string;
};

function SortItem(props: SortItemProps): JSX.Element {
  const { title } = props;

  return (
    <li className="places__option" tabIndex={0}>
      {title}
    </li>
  );
}

export default SortItem;
