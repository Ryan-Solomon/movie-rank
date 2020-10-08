const fetchData = async (searchTerm) => {
  const response = await axios.get('http://ombdapi.com/', {
    params: {
      apikey: '9a416301',
      s: searchTerm,
    },
  });
};

const input = document.querySelector('input');

let timeoutId;

const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(fetchData(event.target.value), 1000);
};

input.addEventListener('input', onInput);
