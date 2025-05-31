import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../store/reducer';

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default useAppSelector;
