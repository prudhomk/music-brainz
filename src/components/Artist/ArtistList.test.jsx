import React from 'react';
import { render } from '@testing-library/react';
import ArtistList from './ArtistList';

describe('Main display component snapshot', () => {
  it('render ArtistList', () => {
    const { asFragment } = render(
      <ArtistList />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
