import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ArrowButton } from '../../../../../components/Header/components/ArrowButton/ArrowButton';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useMutation: jest.fn(),
}));

jest.mock('../../../../../shared/api/services/authentication', () => ({
  __esModule: true,
  useSignOutTalentMutation: jest.fn(() => [jest.fn(), {}]), // Mock the hook to return a function and an object
}));

describe('ArrowButton Component', () => {
  it('renders the arrow button', () => {
    render(<ArrowButton />);
    const arrowButton = screen.getByTestId('KeyboardArrowDownIcon');
    expect(arrowButton).toBeInTheDocument();
  });

  it('opens and closes the menu on arrow button click', () => {
    render(
      <MemoryRouter>
        <ArrowButton />
      </MemoryRouter>
    );

    const arrowButton = screen.getByTestId('KeyboardArrowDownIcon');

    fireEvent.click(arrowButton);
    let menu = screen.queryByTestId('avatar-menu');
    expect(menu).toBeInTheDocument();

    fireEvent.click(document.body);

    setTimeout(() => {
      menu = screen.queryByTestId('avatar-menu');
      expect(menu).not.toBeInTheDocument();
    }, 0);
  });
});