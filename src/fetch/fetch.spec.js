import {
  fetchTrending,
  fetchSearchResults,
  fetchActorData,
  getFilteredResults,
} from './index';

import payload from '../fixtures/payload.json';
import actorPayload from '../fixtures/actorPayload.json';
import output from '../fixtures/output.json';

const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;

describe('fetching data', () => {
  const mockFetchPayload = Promise.resolve({ json: () => payload });
  const mockFetchActorOverview = Promise.resolve({ json: () => actorPayload });

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((arg) => {
      if (typeof arg === 'number') {
        return mockFetchActorOverview;
      }
      return mockFetchPayload;
    });
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('should fetch trending data from API', async () => {
    const data = await fetchTrending();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    expect(data).toEqual(payload);
  });

  it('should fetch search querry data from API', async () => {
    const query = 'tiger';
    const data = await fetchSearchResults(query);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
    );
    expect(data).toEqual(payload);
  });

  it('should fetch actor data from API', async () => {
    const id = 1337;
    const data = await fetchActorData(id);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
    );
    expect(data).toEqual(payload);
  });

  it('should get filtered data', async () => {
    const query = 'tiger';
    const results = await getFilteredResults(query);
    expect(results).toEqual(output);
  });
});
