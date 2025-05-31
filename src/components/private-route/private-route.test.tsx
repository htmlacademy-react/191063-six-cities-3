import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { getMockAppStore, getMockCurrentUser } from '../../utils/mock-utils';
import { AuthorizationStatus, RequestStatus } from '../../const/api-const';
import { withProviders, withStore } from '../../utils/mock-components';
import { UserSlice } from '../../types/store-types';
import { AppRoute } from '../../const/app-const';
import PrivateRoute from './private-route';

describe('Component: PrivateRoute', () => {
  const protectedContent = 'Protected Content';
  const loginContent = 'Sign in';
  const ProtectedComponent = () => <span>{protectedContent}</span>;
  const LoginComponent = () => <span>{loginContent}</span>;

  it('should render protectedContent when user is authorized and open ProtectedComponent', () => {
    const mockCurrentUser = getMockCurrentUser();
    const mockInitialUserSlice: UserSlice = {
      currentUser: mockCurrentUser,
      authStatus: AuthorizationStatus.Auth,
      authRequestStatus: RequestStatus.Idle,
    };

    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });

    const withProvidersComponent = withProviders(
      <PrivateRoute>
        <ProtectedComponent />
      </PrivateRoute>
    );
    const { withStoreComponent } = withStore(
      withProvidersComponent,
      mockAppStore
    );

    render(withStoreComponent);

    expect(screen.getByText(protectedContent)).toBeInTheDocument();
    expect(screen.queryByText(loginContent)).not.toBeInTheDocument();
  });

  it('should render loginContent when user is not authorized and open ProtectedComponent', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: null,
      authStatus: AuthorizationStatus.NoAuth,
      authRequestStatus: RequestStatus.Idle,
    };

    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });

    const resultComponent = (
      <MemoryRouter initialEntries={[AppRoute.Favorites]}>
        <Routes>
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute onlyNotAuth>
                <LoginComponent />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <ProtectedComponent />
              </PrivateRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );
    const { withStoreComponent } = withStore(resultComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.queryByText(protectedContent)).not.toBeInTheDocument();
    expect(screen.getByText(loginContent)).toBeInTheDocument();
  });

  it('should render loginContent when user is not authorized and open LoginComponent', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: null,
      authStatus: AuthorizationStatus.NoAuth,
      authRequestStatus: RequestStatus.Idle,
    };

    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });

    const resultComponent = (
      <MemoryRouter initialEntries={[AppRoute.Login]}>
        <Routes>
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute onlyNotAuth>
                <LoginComponent />
              </PrivateRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );
    const { withStoreComponent } = withStore(resultComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.queryByText(protectedContent)).not.toBeInTheDocument();
    expect(screen.getByText(loginContent)).toBeInTheDocument();
  });
});
