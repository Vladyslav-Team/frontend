import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { CardsList } from '../../../../../components/Main/CardsList/CardsList';
import { page1 } from '../../../../../shared/api/mock/response/allTalents';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const mockSigninPopupContext = {
  setVisibilitySigninPopup: jest.fn(),
};

jest.mock('../../../../../context/signinContex.jsx', () => ({
  ...jest.requireActual('../../../../../context/signinContex.jsx'),
  SigninPopupContext: {
    Consumer: ({ children }) => children(mockSigninPopupContext),
  },
}));

describe('CardsList Component', () => {
  it('renders CardsList component with talents', async () => {
    render(
      <MemoryRouter>
        <CardsList GetTalentsData={{ data: page1 }} />
      </MemoryRouter>
    );

    const nameRegex = /Oleksandr/;

    await waitFor(() => {
      expect(screen.getByText(nameRegex)).toBeInTheDocument();
    });
  });
});
