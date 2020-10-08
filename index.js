const APIKEY = '?apikey=${APIKEY}&';

const fetchData = async () => {
  const response = await axios.get('http://ombdapi.com/', {
    params: {
      apikey: '9a416301',
      s: 'avengers',
    },
  });
};
