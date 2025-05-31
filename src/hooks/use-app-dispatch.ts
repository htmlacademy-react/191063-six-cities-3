import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/store-types';

const useAppDispatch = useDispatch<AppDispatch>;

export default useAppDispatch;
