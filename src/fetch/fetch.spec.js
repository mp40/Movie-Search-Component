import fetchTrending from './index';
import payload from '../fixtures/payload.json';

const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;

describe('fetching trending', () => {
  const mockSuccessResponse = payload;
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  });
  afterEach(() => {
    global.fetch.mockClear();
  });
  it('should fetch trending data from API', async () => {
    const data = await fetchTrending();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
    expect(data).toEqual(payload);
  });
});
