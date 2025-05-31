import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { offersActions } from '../store/slices/offers-slice/offers-slice';
import { AppRoute } from '../const/app-const';
import { userSelectors } from '../store/slices/user-slice/user-slice';
import { FavoriteData } from '../types/offer-types';
import useAppDispatch from './use-app-dispatch';
import useAppSelector from './use-app-selector';

const useUpdateFavoriteOffer = () => {
  const isLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const updateFavoriteOffer = (favoriteData: FavoriteData): void => {
    if (!isLoggedIn) {
      navigate(AppRoute.Login);
    } else {
      dispatch(offersActions.updateFavoriteOffer(favoriteData))
        .unwrap()
        .catch((error: AxiosError) => {
          toast.warn(error.message);
        });
    }
  };

  return useCallback(updateFavoriteOffer, [dispatch, navigate, isLoggedIn]);
};

export default useUpdateFavoriteOffer;
