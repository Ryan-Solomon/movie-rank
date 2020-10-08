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

const input = document.querySelector('input');

const onInput = async (e) => {
  const movies = await fetchData(e.target.value);

  if (movies.length < 1) return;

  movies.map((movie) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${movie.Poster}" />
    <h1>${movie.Title}</h1>
    
    `;

    const targetEle = document.querySelector('#target');
    targetEle.appendChild(div);
  });
};

input.addEventListener('input', debounce(onInput));
