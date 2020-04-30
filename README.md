### Movie-Search-Component
![image](https://user-images.githubusercontent.com/30450957/80659573-4ab7bd00-8ac4-11ea-94f3-8a51aee78321.png)

#### Scope

Build a component (widget) that displays movies, TV shows, and people using [The Movie DB API](https://developers.themoviedb.org/3/getting-started/introduction).

#### Features
* Fetches trending media from API when widget is first loaded.
* Search by name.
* Searches as user types in search input box.
* Filterable results by all, movie, tv show and person.

#### To Run
* You will require an API key. 
* Rename `env_sample` to `env` and replace `YOUR_API_KEY_HERE` with your API key. Please note this is for testing in local host. API keys do not belong deployed in the frontend.
* To start, type `yarn start`.
* To run tests, type `yarn test`.
* To use, open `http://localhost:3000/`.

#### Implementation
* Used TDD when setting up fetches as well as for building `ToggleButtons` and `SearchBar`.
* Added fixtures to assist with tests and for checking CSS without having to fetch from API.
* Initially I used `iFrame` for playing trailers, however due to incompatibility with unmuted auto-play and auto-stop I added the `react-youtube` package and used that instead.
* Long titles and descriptions are truncated.
* CSS rules for both mobile and desktop.
* Added placeholders for thumbnails that are loading or missing.
* Added simple cache for storing prior search queries and results.

#### MVP Branch
* I have an MVP branch which has a `submit` button for making search querries rather than search as typing.

#### MVP
![image](https://user-images.githubusercontent.com/30450957/80659527-28be3a80-8ac4-11ea-8d02-535c72c9b444.png)
