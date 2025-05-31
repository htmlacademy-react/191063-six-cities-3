import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../types/store-types';

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default useAppSelector;
