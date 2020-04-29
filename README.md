### Movie-Search-Component

#### Scope

Build a component (widget) that displays movies, TV shows, and people using [The Movie DB API](https://developers.themoviedb.org/3/getting-started/introduction).

#### Features
* Fetches trending media from API when widget is loaded.
* Search by name.
* Filterable results by all, movie, tv show and person.

#### To Run
* You will require an API key. 
* Rename `env_sample` to `env` and replace `YOUR_API_KEY_HERE` with your API key. Please note this is for testing in local host. API keys do not belong deployed in the frontend.
* To start, type `yarn start`.
* To run tests, type `yarn test`.

#### Implementation
* Used TDD when setting up fetches as well as for building `ToggleButtons` and `SearchBar`.
* Added fixtures to assist with tests and for checking CSS without having to fetch from API.
* Initially I used `iFrame` for playing trailers, however due to incompatibility with unmuted auto-play and auto-stop I added the `react-youtube` package and used that instead.
* Long titles and descriptions are truncated.
* CSS rules for both mobile and desktop.
* Added placeholders for thumbnails that are loading or missing.




