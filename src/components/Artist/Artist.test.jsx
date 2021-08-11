import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Artist from './Artist';

describe('Main display component snapshot', () => {
  it('render Artist', () => {
    const artist = {
      artist: 'name',
      country: 'country'
    };

    act(() => {
      const { asFragment } = render(
        <Artist {...artist}/>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
