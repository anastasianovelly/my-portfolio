import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders portfolio header', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Look specifically for the header link instead of any text
  const headerElement = screen.getByRole('link', { name: /anastasia's portfolio/i });
  expect(headerElement).toBeInTheDocument();
});
