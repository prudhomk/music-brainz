import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  
  it('renders App', async () => {
    render(
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

  it('renders paging', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const increment = screen.getByTestId('increment');
    const page = screen.getByTestId('page');
    userEvent.click(increment);
    expect(page).toContainHTML('<span data-testid="page">Page: 2</span>');

    const decrement = screen.getByTestId('decrement');
    userEvent.click(decrement);
    expect(page).toContainHTML('<span data-testid="page">Page: 1</span>');
      
  });
});
