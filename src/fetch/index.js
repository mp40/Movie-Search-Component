const API_KEY = process.env.REACT_APP_MOVIE_DATABASE_API_KEY;

const fetchTrending = async () => {
  let response;
  try {
    response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
  } catch (err) {
    console.error(err);
  }
  const data = await response.json();
  return data;
};

export default fetchTrending;
