import { render, screen, fireEvent } from '@testing-library/react';
import { getMockAppStore, getMockCurrentUser } from '../../utils/mock-utils';
import { AuthorizationStatus, RequestStatus } from '../../const/api-const';
import { withProviders, withStore } from '../../utils/mock-components';
import { MIN_PASSWORD_LENGTH } from '../../const/app-const';
import { UserSlice } from '../../types/store-types';
import LoginForm from './login-form';

describe('Component: LoginForm', () => {
  const emailTestId = 'email-input-test-id';
  const passwordTestId = 'password-input-test-id';

  it('should render correctly with initial state', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<LoginForm />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByTestId(emailTestId)).toBeInTheDocument();
    expect(screen.getByTestId(passwordTestId)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should enable submit button when form is valid', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<LoginForm />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);

    fireEvent.change(emailInput, {
      target: { value: 'test@example.com' }
    });

    fireEvent.change(passwordInput, {
      target: { value: 'a'.repeat(MIN_PASSWORD_LENGTH) }
    });

    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('should disable submit button when email is invalid', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<LoginForm />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);

    fireEvent.change(emailInput, {
      target: { value: 'invalid-email' }
    });

    fireEvent.change(passwordInput, {
      target: { value: 'a'.repeat(MIN_PASSWORD_LENGTH) }
    });

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should disable submit button when password is too short', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<LoginForm />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);

    fireEvent.change(emailInput, {
      target: { value: 'test@example.com' }
    });

    fireEvent.change(passwordInput, {
      target: { value: 's' }
    });

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should disable inputs during loading state', () => {
    const mockUser = getMockCurrentUser();
    const mockInitialUserSlice: UserSlice = {
      currentUser: mockUser,
      authStatus: AuthorizationStatus.Auth,
      authRequestStatus: RequestStatus.Loading,
    };
    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice
    });

    const withProvidersComponent = withProviders(<LoginForm />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);
    const submitButton = screen.getByRole('button');

    expect(emailInput).toBeDisabled();
    expect(passwordInput).toBeDisabled();
    expect(submitButton).toBeDisabled();
  });
});
