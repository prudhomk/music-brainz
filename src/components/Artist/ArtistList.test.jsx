import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ArtistList from './ArtistList';

describe('Main display component snapshot', () => {
  it('render ArtistList', () => {
    const list = {
      name: 'name',
      country: 'country'
    };
    act(() => { 
      const { asFragment } = render(
        <ArtistList {...list} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
