import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Release from './Release';


describe('Release component snapshot', () => {

  it('render Release', () => {
    const release = {
      id: '1',
      title: 'title',
      date: 'date',
      art: 'image',
    };

    act(() => {
      const { asFragment } = render(
        <Release {...release} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
