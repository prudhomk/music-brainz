import React from 'react';
import { render } from '@testing-library/react';
import Recording from './Recording';


describe('Recording component snapshot', () => {

  it('render Recording', () => {
    const { asFragment } = render(
      <Recording />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
