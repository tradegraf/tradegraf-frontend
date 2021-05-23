import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from '../';

describe('Landing', () => {
  it('should render sign in link', () => {
    const { container } =  render(<Router><Landing /></Router>);

    const signInLink = screen.getByRole('link', { name: 'Sign in' });

    expect(container).toHaveTextContent('Sign in');
  })
})
