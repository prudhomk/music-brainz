import React from 'react';
import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ReleaseList from './ReleaseList';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'http://musicbrainz.org/ws/2/recording?release=id&fmt=json',
    (req, res, ctx) => {
      return res(
        ctx.json(
          {
            'id': '1',
            'title': 'banana',
            'date': '09-09-09'
          }
        )
      );
    }
  )
);

describe('Main display component snapshot', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('render ReleaseList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ReleaseList />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
