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
