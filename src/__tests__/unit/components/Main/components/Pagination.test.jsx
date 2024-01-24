import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Pagination } from '../../../../../components/Main/Pagination/Pagination'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import '@testing-library/jest-dom/extend-expect'

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

  const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pagination Component', () => {
  it('renders Pagination component', () => {
    render(<ThemeProvider theme={theme}>
      <MemoryRouter>
        <Pagination totalPages={5} currentPage={1} />
      </MemoryRouter>
    </ThemeProvider>);

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  it('calls navigate on page change', () => {
    const mockNavigate = jest.fn();
    render(
        <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Pagination totalPages={5} currentPage={1} />
        </MemoryRouter>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByLabelText('Go to page 2'));

    expect(mockNavigate).toHaveBeenCalledWith('/talents?page=2');
  });
});