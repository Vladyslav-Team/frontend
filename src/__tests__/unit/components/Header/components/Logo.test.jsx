import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { Logo } from '../../../../../components/Header/components/Logo/Logo';

describe('Logo Component', () => {
  it('renders the SkillScope logo', () => {
    render(<Logo />);

    const logoText = screen.getByText('SkillScope');

    expect(logoText).toBeInTheDocument();
  });
});