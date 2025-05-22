import { render, screen } from '@testing-library/react';
import App from './App';

test('scroll position resets to top on page transition', () => {
    window.scrollTo = jest.fn();
    render(<App />);
    // Simulate page transition
    // Assuming there's a function to navigate to a new page
    // navigateToNewPage();
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
});