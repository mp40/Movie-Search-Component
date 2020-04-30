import {
  fetchTrending,
  fetchSearchResults,
  fetchActorData,
  fetchVideoData,
  getFilteredResults,
  getFilteredTrending,
} from './index';

import payload from '../fixtures/payload.json';
import actorPayload from '../fixtures/actorPayload.json';
import videoPayload from '../fixtures/videoPayload.json';
import output from '../fixtures/output.json';

import {
  API_BASE_URL,
  API_TRENDING_URL,
  API_SEARCH_URL,
  API_ACTOR_URL,
} from '../constants';

const API_KEY = `?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}`;

describe('fetching data', () => {
  const mockFetchPayload = Promise.resolve({ json: () => payload });
  const mockFetchActorPayload = Promise.resolve({ json: () => actorPayload });
  const mockFetchVideoPayload = Promise.resolve({ json: () => videoPayload });

  describe('fetching list', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => mockFetchPayload);
    });

    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should fetch trending data from API', async () => {
      const data = await fetchTrending();
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_TRENDING_URL}${API_KEY}`,
      );
      expect(data).toEqual(payload);
    });

    it('should fetch search querry data from API', async () => {
      const query = 'tiger';
      const data = await fetchSearchResults(query);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_SEARCH_URL}${API_KEY}&language=en-US&query=${query}&page=1`,
      );
      expect(data).toEqual(payload);
    });
  });

  describe('fetching person data', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => mockFetchActorPayload);
    });

    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should fetch actor data from API', async () => {
      const id = 1337;
      const data = await fetchActorData(id);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_ACTOR_URL}${id}${API_KEY}&language=en-US`,
      );
      expect(data).toEqual(actorPayload);
    });
  });

  describe('fetching videos', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => mockFetchVideoPayload);
    });

    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should fetch movie video data from API', async () => {
      const mediaType = 'movie';
      const id = 1337;
      const data = await fetchVideoData(mediaType, id);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_BASE_URL}/movie/${id}/videos${API_KEY}&language=en-US`,
      );
      expect(data).toEqual(videoPayload);
    });

    it('should fetch tv video data from API', async () => {
      const mediaType = 'tv';
      const id = 1337;
      const data = await fetchVideoData(mediaType, id);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_BASE_URL}/tv/${id}/videos${API_KEY}&language=en-US`,
      );
      expect(data).toEqual(videoPayload);
    });
  });

  describe('geting filtered search list', () => {
    beforeEach(() => {
      global.fetch = jest
        .fn()
        .mockImplementationOnce(() => mockFetchPayload)
        .mockImplementationOnce(() => mockFetchVideoPayload)
        .mockImplementationOnce(() => mockFetchVideoPayload)
        .mockImplementationOnce(() => mockFetchVideoPayload)
        .mockImplementationOnce(() => mockFetchActorPayload)
        .mockImplementationOnce(() => mockFetchActorPayload);
    });

    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should get filtered data', async () => {
      const query = 'tiger';
      const results = await getFilteredResults(query);
      expect(results).toEqual(output);
    });
  });

  describe('geting filtered trending list', () => {
    beforeEach(() => {
      global.fetch = jest
        .fn()
        .mockImplementationOnce(() => mockFetchPayload)
        .mockImplementationOnce(() => mockFetchVideoPayload)
        .mockImplementationOnce(() => mockFetchVideoPayload)
        .mockImplementationOnce(() => mockFetchVideoPayload)
        .mockImplementationOnce(() => mockFetchActorPayload)
        .mockImplementationOnce(() => mockFetchActorPayload);
    });

    afterEach(() => {
      global.fetch.mockClear();
    });

    it('should get filtered data', async () => {
      const query = 'tiger';
      const results = await getFilteredTrending(query);
      expect(results).toEqual(output);
    });
  });
});
