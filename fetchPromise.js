const headers = new Headers({
  "X-RapidAPI-Key": '5ccd93182dmsh73c15c3b69ac2a3p175653jsn4536d573f722'
});

const fetchPromise = fetch("youtube-music1.p.rapidapi.com", {
  headers: headers
});

fetchPromise.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.text();
}).then(body => {
  console.log(body);
}).catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});