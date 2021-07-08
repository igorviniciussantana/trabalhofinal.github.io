class NoticiaDestaque extends Noticia {
  set imagemDestaque(imagem) {
    this._imagem = imagem;
  }
  
  get mostrarNoticiaDestaque() {
     try {
      return this.noticiaNova();

    } catch (erro) {
      return erro

    } finally {
      console.log("Executado")
    }

  }
  noticiaNova() {

    if (this._imagem !="" ) {

        return `
        <div class="border p-3">
        <a href="${this._link}"><h1 class="mt-5 mb-3">${this._titulo}</h1></a>
        <img  src="${this._imagem}" class="img-responsive col-md-12">
        <p class="mt-2">${this._data}</p>
        <p class="descricao">${this._resumo}</p>
        </div>
      
      `
  

    }else {
      throw new ErroNoticia("A noticia não está completa")
    }
  }
}