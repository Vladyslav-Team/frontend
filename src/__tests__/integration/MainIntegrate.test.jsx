import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Main } from '../../components/Main/Main.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { ThemeProvider } from '@mui/material/styles';
import { useGetTalentsQuery } from '../../components/Main/Pagination/api/services/index.js';
import { page1, page2 } from '../../shared/api/mock/response/allTalents.js';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { SigninPopupContext } from '../../context/signinContex.jsx';
import { createTheme } from '@mui/material/styles';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { PageNotFound  } from '../../components/404/PageNotFound.jsx';
import { Provider } from 'react-redux';

import { useGetAvatarTalentQuery } from '../../components/Avatar/api/index.js';
import { SignUp } from '../../components/pages/SignUp/SignUp';

jest.mock('../../components/Main/Pagination/api/services');
jest.mock('../../components/Avatar/api/index.js');
const MockSigninPopupProvider = ({ children, visibilitySigninPopup }) => {
  return (
    <SigninPopupContext.Provider value={{ setVisibilitySigninPopup: jest.fn(), visibilitySigninPopup }}>
      {children}
    </SigninPopupContext.Provider>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  typography: {
    pagination: {
      fontFamily: 'Arial, sans-serif',
    },
  },
});

Object.defineProperty(window, 'scroll', {
    value: jest.fn(),
  });

describe('Main Component', () => {
    it('renders Main component with talents', async () => {
        useGetTalentsQuery.mockReturnValue({ data: page1, isError: false });
    
        render(
   
        <ThemeProvider theme={theme}>
          <MemoryRouter>
            <MockSigninPopupProvider visibilitySigninPopup={true}>
                <Header/>
              <Main />
            </MockSigninPopupProvider>
          </MemoryRouter>
        </ThemeProvider>

          );
    
          await waitFor(() => expect(screen.getByTestId('header')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByTestId('main-page')).toBeInTheDocument());
    
        expect(screen.getByTestId('pagination')).toBeInTheDocument();
        expect(screen.getByTestId('cardsList')).toBeInTheDocument();
    
        // Click the button to route to /proofs
        fireEvent.click(fireEvent.click(screen.getByText('Proofs')));
    
        // Wait for the PageNotFound component to be rendered
        await waitFor(() => expect(screen.getByTestId('pageNotFound')).toBeInTheDocument());
      });

    
  it('Routs to sign-in page when sign-in button is clicked', async () => {
    useGetTalentsQuery.mockReturnValue({ data: page1, isError: false });
    const history = createMemoryHistory();
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/talents']} history={history}>
          <MockSigninPopupProvider visibilitySigninPopup={true}>
            <Header />
            <Main />
          </MockSigninPopupProvider>
        </MemoryRouter>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole('link', { name: /sign in/i }));

    // Wait for the navigation to occur
    await waitFor(() => {
      expect(history.location.pathname).toBe('/talents/signin');
    });
  });

  it('Routs to sign-in page when sign-in button is clicked', async () => {
    useGetTalentsQuery.mockReturnValue({ data: page1, isError: false });
    const history = createMemoryHistory();
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter history={history}>
          <MockSigninPopupProvider visibilitySigninPopup={true}>
            <Header />
            <Main />
          </MockSigninPopupProvider>
        </MemoryRouter>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole('link', { name: /sign up/i }));

    // Wait for the navigation to occur
    await waitFor(() => {
      expect(history.location.pathname).toBe('/talents/signup');
    });
  });

  it('Routs to /proofs when Proofs button is clicked', async () => {
    useGetTalentsQuery.mockReturnValue({ data: page1, isError: false });
    const history = createMemoryHistory();
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter history={history}>
          <MockSigninPopupProvider visibilitySigninPopup={true}>
            <Header />
            <Main />
          </MockSigninPopupProvider>
        </MemoryRouter>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole('link', { name: /Proofs/i }));

    // Wait for the navigation to occur
    await waitFor(() => {
      expect(history.location.pathname).toBe('/proofs');
    });
  });

  it('Routs to the right page when clicked', async () => {
    useGetTalentsQuery.mockReturnValue({ data: page1, isError: false });
    const mockNavigate = jest.fn();
        render(
        <ThemeProvider theme={theme}>
          <MemoryRouter>
            <MockSigninPopupProvider visibilitySigninPopup={true}>
                <Header/>
              <Main />
            </MockSigninPopupProvider>
          </MemoryRouter>
        </ThemeProvider>
          );

          fireEvent.click(screen.getByLabelText('page 1'));

          expect(mockNavigate).toHaveBeenCalledWith('/talents?page=1');
    });
  });

