let requestURL = "https://www.luizpicolo.com.br/api.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {

 var noticias = request.response;
 var div = document.getElementById("div");
 
 noticias.articles.forEach(function(noticia) {


 let novaNoticia = new Noticia;

 novaNoticia._titulo = noticia.title;
 novaNoticia._data = noticia.publishedAt;
 novaNoticia._autor = noticia.author;
 novaNoticia._descricao = noticia.description;


 div.insertAdjacentHTML('afterbegin', novaNoticia.mostrarNoticia + "<br/>");





 })




}

