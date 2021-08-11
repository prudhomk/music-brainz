import React from 'react';
import { render } from '@testing-library/react';
import Artist from './Artist';

describe('Main display component snapshot', () => {
  it('render Artist', () => {
    const { asFragment } = render(
      <Artist />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
