import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../../../../components/Header/Header';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import '@testing-library/jest-dom/extend-expect';

describe('Header Component', () => {
  it('renders header component', () => {
    render(
        <Provider store={store}> 
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders logo with a link to talents page', () => {
    render(
        <Provider store={store}> 
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    const logoLink = screen.getByRole('link', { name: /talents/i });
    expect(logoLink).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
        <Provider store={store}> 
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    const talentsNavLink = screen.getByRole('link', { name: /talents/i });
    const proofsNavLink = screen.getByRole('link', { name: /proofs/i });

    expect(talentsNavLink).toBeInTheDocument();
    expect(proofsNavLink).toBeInTheDocument();
  });

  it('renders sign-up and sign-in buttons when not authenticated', () => {
    render(
        <Provider store={store}> 
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    const signUpButton = screen.getByRole('link', { name: /sign up/i });
    const signInButton = screen.getByRole('link', { name: /sign in/i });

    expect(signUpButton).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

});