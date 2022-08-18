/* Api */

let url = 'https://newsapi.org/v2/top-headlines?' +
'sources=bbc-news&' +
'apiKey=036d0e62c7724afea656f4f44b87b354';


fetch(url)
  .then((response) => response.json()) 
  .then((data) => {
    console.log(data.articles); 
  });