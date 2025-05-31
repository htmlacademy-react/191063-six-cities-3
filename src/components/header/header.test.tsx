import { render, screen } from '@testing-library/react';
import { getMockAppStore, getMockCurrentUser } from '../../utils/mock-utils';
import { AuthorizationStatus, RequestStatus } from '../../const/api-const';
import { withProviders, withStore } from '../../utils/mock-components';
import { UserSlice } from '../../types/store-types';
import Header from './header';

describe('Component: Header', () => {
  it('should render correctly with showUser=true and logged in user', () => {
    const mockUser = getMockCurrentUser();
    const mockInitialUserSlice: UserSlice = {
      currentUser: mockUser,
      authStatus: AuthorizationStatus.Auth,
      authRequestStatus: RequestStatus.Idle,
    };

    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });

    const withProvidersComponent = withProviders(<Header showUser />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.queryByText('Sign in')).not.toBeInTheDocument();
  });

  it('should render correctly with showUser=true and no user', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: null,
      authStatus: AuthorizationStatus.NoAuth,
      authRequestStatus: RequestStatus.Idle,
    };

    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice
    });

    const withProvidersComponent = withProviders(<Header showUser />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.queryByText('Sign out')).not.toBeInTheDocument();
  });

  it('should not render user section when showUser=false', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<Header showUser={false} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.queryByText('Sign in')).not.toBeInTheDocument();
    expect(screen.queryByText('Sign out')).not.toBeInTheDocument();
    expect(screen.queryByRole('nav')).not.toBeInTheDocument();
  });
});
