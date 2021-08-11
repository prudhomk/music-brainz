import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MainDisplay from './MainDisplay';

describe('Main display component snapshot', () => {
  it('render MainDisplay', () => {
    act(() => {
      const { asFragment } = render(
        <MainDisplay />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
