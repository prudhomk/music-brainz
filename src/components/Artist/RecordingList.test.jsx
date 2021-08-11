import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node'; 
import RecordingList from './RecordingList';

const server = setupServer(
  rest.get(
    'http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json',
    (req, res, ctx) => {
      return res(
        ctx.json(
          {
            'id': '1',
            'title': 'banana'
          }
        )
      );
    }
  )
);

describe('Main display component snapshot', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('render RecordingList', async () => {
    const { asFragment } = render(
      <MemoryRouter>
        <RecordingList />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
