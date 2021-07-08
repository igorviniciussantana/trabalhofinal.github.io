let requestURL = "https://www.luizpicolo.com.br/api.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {

  var noticias = request.response;
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");


  // Retorna a primeira noticia, que deve ser em destaque
  var ultimo = noticias.articles[0];


  let novaDestaque = new NoticiaDestaque;

  novaDestaque._titulo = ultimo.title;
  novaDestaque._imagem = ultimo.urlToImage;
  novaDestaque._data = ultimo.publishedAt;
  novaDestaque._resumo = ultimo.description;
  novaDestaque._link = ultimo.url;

  div1.insertAdjacentHTML('afterbegin', novaDestaque.mostrarNoticiaDestaque + "<br/>");

  // Remove do Array a primeira posição
  noticias.articles.shift();

  noticias.articles.forEach(function (noticia) {
    let novaNoticia = new Noticia;

    novaNoticia._titulo = noticia.title;
    novaNoticia._data = noticia.publishedAt;
    novaNoticia._autor = noticia.author;
    novaNoticia._descricao = noticia.description;
    novaNoticia._link = noticia.url;

    div2.insertAdjacentHTML('afterbegin', novaNoticia.mostrarNoticia + "<br/>");
  })
}