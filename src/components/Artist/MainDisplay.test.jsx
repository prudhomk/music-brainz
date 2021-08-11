import React from 'react';
import { render } from '@testing-library/react';
import MainDisplay from './MainDisplay';

describe('Main display component snapshot', () => {
  it('render MainDisplay', () => {
    const { asFragment } = render(
      <MainDisplay />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
