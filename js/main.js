
let urlSport = ('https://newsapi.org/v2/top-headlines?category=sport&language=es&apiKey=');
let urlPolitics =('https://newsapi.org/v2/top-headlines?category=politics&language=es&apiKey=');
let urlMundo = ('https://deperu.com/api/rest/noticias.json');
let urlTec =('https://newsapi.org/v2/top-headlines?category=technology&apiKey=')
let date = document.getElementById('fecha');
date.innerHTML = new Date();

let menuNoticias = document.getElementById('menuNoticias');

let col = document.getElementById('card');
let col2 = document.getElementById('card2');
let col3 = document.getElementById('card3');
let sports = document.getElementById('deportes');
let politica = document.getElementById('politica');
let politica1 = document.getElementById('cardP1');
let politica2 = document.getElementById('cardP2');
let politica3 = document.getElementById('cardP3');
let mundo = document.getElementById('mundo');
let mundo1 = document.getElementById('mundo1');
let mundo2 = document.getElementById('mundo2');
let mundo3 = document.getElementById('mundo3');
let tec = document.getElementById('tecnologia');
let tec1 = document.getElementById('tec1');
let tec2 = document.getElementById('tec2');
let tec3 = document.getElementById('tec3');

fetch(urlSport)
.then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);
    let arrayObject = data.articles;
    let firstRow = arrayObject.slice(0,7);
    let secondRow = arrayObject.slice(8,14);
    let thirdRow = arrayObject.slice(15,20);
    for(array of firstRow){
            createCard(array);
        }
    for(array of secondRow){
        createCard2(array);
    }
    for(array of thirdRow){
        createCard3(array);
    }
    })
menuNoticias.addEventListener ('change', (e) => {
    let select = e.target.value;
    if(select === 'politica' ){
        fetch(urlPolitics)
        .then(response =>{
            return response.json();
        }).then(data => {
           sports.style.display= 'none';
           let arrayPolitic = data.articles;
           let firstRow = arrayPolitic.slice(0,7);
           let secondRow = arrayPolitic.slice(8,14);
           let thirdRow = arrayPolitic.slice(15,20);
           for(array of firstRow){
            createPoliticCard(array);
        }
    for(array of secondRow){
        createPoliticCard2(array);
    }
    for(array of thirdRow){
        createPoliticCard3(array);
    }
            
        })
    }else if(select === 'mundo'){  
        fetch(urlMundo)
        .then(response =>{
            return response.json();
        }).then(data =>{        
            sports.style.display = 'none';
            mundo.style.display = 'block';
            tec.style.display = 'none';
            politica.style.display = 'none';
            let firstRow = data.slice(0,8);
            let secondRow = data.slice(9,14);
            let thirdRow = data.slice(15,24);
            for(array of firstRow ){
                createMundoCard(array);
            }
            for(array of secondRow ){
                createMundoCard2(array);
            }
            for(array of thirdRow ){
                createMundoCard3(array);
            }
        } )
    }else if ( select === 'tecnologia'){
        fetch(urlTec)
        .then(response =>{
            return response.json();
        }).then(data => {
            sports.style.display = 'none';
            politica.style.display='none';
            mundo.style.display= 'none';
            tec.style.display= 'block';
            console.log(data);
            let arrayTec = data.articles;
            let firstRow = arrayTec.slice(0,6);
            let secondRow = arrayTec.slice(7,13);
            let thirdRow = arrayTec.slice(14,20);
            for(array of firstRow){
                createTecCard(array);
            }
            for(array of secondRow){
                createTecCard2(array);
            }
            for(array of thirdRow){
                createTecCard3(array);
            }
        })
    }
}) 


function createCard(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.urlToImage}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.description}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    col.appendChild(card);
}
function createCard2(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.urlToImage}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.description}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    col2.appendChild(card);
}
function createCard3(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.urlToImage}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.description}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    col3.appendChild(card);
}
function createPoliticCard(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.urlToImage}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.description}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    politica1.appendChild(card);
}
function createPoliticCard2(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.urlToImage}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.description}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    politica2.appendChild(card);
}
function createPoliticCard3(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.urlToImage}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.description}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    politica3.appendChild(card);
}
function createMundoCard(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.imagen}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.resumen}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    mundo1.appendChild(card);
}
function createMundoCard2(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.imagen}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.resumen}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    mundo2.appendChild(card);
}
function createMundoCard3(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.imagen}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.resumen}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    mundo3.appendChild(card);
}
function createTecCard(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.urlToImage}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.description}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    tec1.appendChild(card);
}
function createTecCard2(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.urlToImage}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.description}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    tec2.appendChild(card);
}
function createTecCard3(){
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style','whidth: 18rem;');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.setAttribute('src',`${array.urlToImage}`);
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${array.description}`;
    cardBody.appendChild(p);
    card.append(img,cardBody);
    tec3.appendChild(card);
}