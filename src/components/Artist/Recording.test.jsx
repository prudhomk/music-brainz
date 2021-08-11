import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Recording from './Recording';


describe('Recording component snapshot', () => {

  it('render Recording', () => {
    const recording = {
      title: 'title'
    };
    act(() => {
      const { asFragment } = render(
        <Recording {...recording} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
