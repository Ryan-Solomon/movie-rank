const fetchData = async (searchTerm) => {
  const response = await axios.get('http://ombdapi.com/', {
    params: {
      apikey: '9a416301',
      s: searchTerm,
    },
  });
};

const input = document.querySelector('input');

const debounce = (fn, delay = 500) => {
  let timoutId;
  function debounceified(...args) {
    if (timoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), delay);
  }
  return debounceified;
};

const onInput = debounce((e) => fetchData(e.target.value));

input.addEventListener('input', onInput);
