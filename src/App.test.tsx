import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('scroll position resets to top on page transition', () => {
    window.scrollTo = jest.fn();
    render(<App />);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  test('renders the app component correctly', () => {
    render(<App />);
    const appElement = document.querySelector('div');
    expect(appElement).toBeInTheDocument();
  });
});
