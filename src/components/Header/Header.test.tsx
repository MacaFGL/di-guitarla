import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';
describe('Header', () => {
  it('displays the logo with a link to home', () => {
    render(<Header />);

    const logo = screen.getByAltText('Logotipo de GuitarLA');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });
  it('displays the cart button', () => {
    render(<Header />);

    expect(
      screen.getByRole('button', { name: 'Abrir carrito' })
    ).toBeInTheDocument();
  });
  it('matches the snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
