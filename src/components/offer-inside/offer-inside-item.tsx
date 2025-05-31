type OfferInsideItemProps = {
  title: string;
};

function OfferInsideItem(props: OfferInsideItemProps): JSX.Element {
  const { title } = props;

  return <li className="offer__inside-item">{title}</li>;
}

export default OfferInsideItem;
