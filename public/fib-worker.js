const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

onmessage = (e) => {
  // const { num } = e.data;

  // const startTime = new Date().getTime();
  // const fibNum = fib(num);

  let data;

  const request = new Request('https://jsonplaceholder.typicode.com/posts');

  fetch(request, {
    mode: 'cors',
  })
  .then((response) => response.json())
  .then((json) => data = json)

  postMessage({
    data,
  });
};
