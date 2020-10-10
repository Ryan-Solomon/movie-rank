const fetchData = async (searchTerm) => {
  const response = await axios.get('http://ombdapi.com/', {
    params: {
      apikey: '9a416301',
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
<label><b>Search For a Movie</b></label>
<input class="input" />
<div class="dropdown">
  <div class="dropdown-menu">
    <div class="dropdown-content results"></div>
  </div>
</div>
`;

const input = document.querySelector('input');
const resultsWrapper = document.querySelector('.results');
const dropdown = document.querySelector('.dropdown');

const onInput = async (e) => {
  const movies = await fetchData(e.target.value);

  if (movies.length < 1) return;

  resultsWrapper.innerHTML = '';

  dropdown.classList.add('is-active');
  movies.map((movie) => {
    const option = document.createElement('a');
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    option.classList.add('dropdown-item');
    option.innerHTML = `
    <img src="${imgSrc}" />
    ${movie.Title}
    `;

    input.addEventListener('click', () => {
      drowpdown.classList.remove('is-active');
      input.value = movie.Title;
      onMovieSelect(movie);
    });

    resultsWrapper.appendChild(option);
  });
};

input.addEventListener('input', debounce(onInput));

document.addEventListener('click', (e) => {
  if (!root.contains(e.target)) {
    dropdown.classList.remove('is-active');
  }
});

const onMovieSelect = async (movie) => {
  const response = await axios.get('http://ombdapi.com/', {
    params: {
      apikey: '9a416301',
      i: movie.imbdID,
    },
    movieTemplate(response.data)
}

  
const movieTemplate = (movieData) => {
  return (`
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieData.Poster}"
      </p>
    </figure>
    <div class="media-content">
      <div class = "content">
        <h1>${movieData.Title}</h1>
        <h4>${movieData.Genre}</h4>
        <p>${movieData.Plot}</p>
      </div>
    </div>
  </article>
  `
  )}

