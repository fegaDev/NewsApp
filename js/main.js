/* Api */

let url = 'https://newsapi.org/v2/top-headlines?' +
'sources=bbc-news&' +
'apiKey=036d0e62c7724afea656f4f44b87b354';

let imagen = document.getElementById("img");
let autor = document.getElementById("titulo");
let desc = document.getElementById("description");
let button = document.getElementById("btn");
fetch(url)
  .then((response) => response.json()) 
  .then((data) => {
    let img = data.articles[0].urlToImage;
    imagen.src = img;
    autor.innerHTML = data.articles[0].author;
    desc.innerHTML = data.articles[0].description;
    button.href = data.articles[0].url;
  });

  console.log(button);