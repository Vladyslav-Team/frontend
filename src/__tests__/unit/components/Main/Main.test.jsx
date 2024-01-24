import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Main } from '../../../../components/Main/Main.jsx';
import { ThemeProvider } from '@mui/material/styles'
import { useGetTalentsQuery } from '../../../../components/Main/Pagination/api/services/index.js';
import { page1 } from '../../../../shared/api/mock/response/allTalents.js';
import { MemoryRouter } from 'react-router-dom';
import { SigninPopupContext } from '../../../../context/signinContex.jsx';
import { createTheme } from '@mui/material/styles';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../../components/Main/Pagination/api/services');

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


describe('Main Component', () => {
  it('renders Main component with talents', async () => {
    useGetTalentsQuery.mockReturnValue({ data: page1, isError: false });

    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <MockSigninPopupProvider visibilitySigninPopup={true}>
            <Main />
          </MockSigninPopupProvider>
        </MemoryRouter>
      </ThemeProvider>
    );

    await waitFor(() => expect(screen.getByTestId('main-page')).toBeInTheDocument());

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByTestId('cardsList')).toBeInTheDocument();
  });
});
