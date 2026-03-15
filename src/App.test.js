// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VitessSharding title', () => {
    render(<App />);
    const titleElement = screen.getByText(/VitessSharding/i);
    expect(titleElement).toBeInTheDocument();
});
