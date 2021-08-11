import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  
  it('renders App', async () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const searchBar = screen.getByPlaceholderText('Artist');
    userEvent.type(searchBar);
    fireEvent.change(searchBar, { target: { value: 'nas' } });
    expect(searchBar).toHaveDisplayValue('nas');

    const submitButton = screen.getByTestId('submitButton');
    const display = screen.getByTestId('display');
    userEvent.click(submitButton);
    expect(display).not.toBeEmptyDOMElement();

    const ul = await screen.findByTestId('artistList');
    expect(ul).toBeEmptyDOMElement();
  });
});
