import { render, screen } from '@testing-library/react';
import { getMockAppStore, getMockCurrentUser } from '../../utils/mock-utils';
import { AuthorizationStatus, RequestStatus } from '../../const/api-const';
import { withStore } from '../../utils/mock-components';
import { UserSlice } from '../../types/store-types';
import { AppRoute } from '../../const/app-const';
import App from './app';

describe('Component: App', () => {
  const mainPageTestId = 'main-page-test-id';
  const favoritePageTestId = 'favorite-page-test-id';
  const loginPageTestId = 'login-page-test-id';
  const notFoundPageTestId = 'not-found-page-test-id';
  const mockCurrentUser = getMockCurrentUser();

  it('should render MainPage when user navigates to "/"', () => {
    const mockAppStore = getMockAppStore();
    const { withStoreComponent } = withStore(<App />, mockAppStore);

    window.history.pushState({}, '', AppRoute.Root);
    render(withStoreComponent);

    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('should render LoginPage when user navigates to "/login" and is not authorized', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: null,
      authStatus: AuthorizationStatus.NoAuth,
      authRequestStatus: RequestStatus.Idle,
    };
    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });
    const { withStoreComponent } = withStore(<App />, mockAppStore);

    window.history.pushState({}, '', AppRoute.Login);
    render(withStoreComponent);

    expect(screen.getByTestId(loginPageTestId)).toBeInTheDocument();
  });

  it('should redirect to MainPage when user navigates to "/login" and is authorized', () => {
    const emailInputTestId = 'email-input-test-id';
    const mockInitialUserSlice: UserSlice = {
      currentUser: mockCurrentUser,
      authStatus: AuthorizationStatus.Auth,
      authRequestStatus: RequestStatus.Idle,
    };
    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });
    const { withStoreComponent } = withStore(<App />, mockAppStore);

    window.history.pushState({}, '', AppRoute.Login);
    render(withStoreComponent);

    expect(screen.getByTestId(mainPageTestId)).toBeInTheDocument();
    expect(screen.queryByTestId(emailInputTestId)).not.toBeInTheDocument();
  });

  it('should render FavoritesPage when user navigates to "/favorites" and is authorized', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: mockCurrentUser,
      authStatus: AuthorizationStatus.Auth,
      authRequestStatus: RequestStatus.Idle,
    };
    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });
    const { withStoreComponent } = withStore(<App />, mockAppStore);

    window.history.pushState({}, '', AppRoute.Favorites);
    render(withStoreComponent);

    expect(screen.getByTestId(favoritePageTestId)).toBeInTheDocument();
  });

  it('should redirect to LoginPage when user navigates to "/favorites" and is not authorized', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: null,
      authStatus: AuthorizationStatus.NoAuth,
      authRequestStatus: RequestStatus.Idle,
    };
    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });
    const { withStoreComponent } = withStore(<App />, mockAppStore);

    window.history.pushState({}, '', AppRoute.Favorites);
    render(withStoreComponent);

    expect(screen.getByTestId(loginPageTestId)).toBeInTheDocument();
    expect(screen.queryByTestId(favoritePageTestId)).not.toBeInTheDocument();
  });

  it('should render NotFoundPage when user navigates to non-existent route', () => {
    const mockAppStore = getMockAppStore();
    const { withStoreComponent } = withStore(<App />, mockAppStore);

    window.history.pushState({}, '', 'non-existent-route');
    render(withStoreComponent);

    expect(screen.getByTestId(notFoundPageTestId)).toBeInTheDocument();
  });
});
