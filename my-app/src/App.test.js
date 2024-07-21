import { render, screen } from '@testing-library/react';
import App from './App';

function coolFunc(){
  return(<h1> interesting </h1>)
}

test('renders learn react link', () => {
  render(<coolFunc />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
