import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { offersActions } from '../store/slices/offers-slice/offers-slice';
import { AppRoute } from '../const/app-const';
import { userSelectors } from '../store/slices/user-slice/user-slice';
import useAppDispatch from './use-app-dispatch';
import useAppSelector from './use-app-selector';

const useUpdateFavoriteOffer = () => {
  const isLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const updateFavoriteOffer = (
    evt: React.MouseEvent<HTMLButtonElement>,
    id: string,
    isFavorite: boolean,
  ): void => {
    evt.preventDefault();

    if (!isLoggedIn) {
      navigate(AppRoute.Login);
    } else {
      dispatch(offersActions.updateFavoriteOffer({
        offerId: id,
        status: Number(!isFavorite),
      }))
        .unwrap()
        .catch((error: AxiosError) => {
          toast.warn(error.message);
        });
    }
  };

  return updateFavoriteOffer;
};

export type updateFavoriteOfferType = ReturnType<typeof useUpdateFavoriteOffer>;

export default useUpdateFavoriteOffer;
