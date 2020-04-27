const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;

export const fetchTrending = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  );
  return response.json();
};

export const fetchSearchResults = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
  );
  return response.json();
};

export const fetchActorData = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`,
  );
  return response.json();
};

export const fetchVideoData = async (mediaType, id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${API_KEY}&language=en-US`,
  );
  return response.json();
};

export const getFilteredResults = async (query) => {
  const data = await fetchSearchResults(query);

  return Promise.all(
    data.results.map(async (item) => {
      let actorData;
      let videoData;
      let trailerData;

      if (item.media_type === 'person') {
        actorData = await fetchActorData(item.id);
      }

      if (item.media_type !== 'person') {
        videoData = await fetchVideoData(item.mediaType, item.id);


        trailerData = videoData.results.reduce((filtered, video) => {
          if (video.type === 'Trailer') {
            filtered.push({
              id: video.id,
              key: video.key,
              site: video.site,
              size: video.size,
            });
          }
          return filtered;
        }, []);
      }

      return {
        id: item.id,
        overview: item.overview || actorData?.biography,
        imagePath: item.poster_path || item.profile_path,
        date: item.release_date || item.first_air_date,
        name: item.title || item.name,
        voteAverage: item.vote_average,
        trailers: trailerData || undefined,
        gender: item.gender,
        mediaType: item.media_type,
      };
    }),
  );
};
