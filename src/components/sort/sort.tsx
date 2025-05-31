import { SORT_TYPES } from '../../const';
import SortItem from './sort-item';

function Sort(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        {SORT_TYPES.map((sortType) => (
          <SortItem key={sortType} title={sortType} />
        ))}
      </ul>
    </form>
  );
}

export default Sort;
