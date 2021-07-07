class Noticia {
  set titulo(titulo){
    this._titulo = titulo;
  }
  get tituloNoticia(){
    return this._titulo
  }

  set data(data){
    this._data = data;
  }
  get dataNoticia(){
    return this._data;
  }


 set autor(autor){
    this._autor = autor;
  }
  get autorNoticia(){
    return this._autor
  }

  set descricao(descricao){
    this._descricao = descricao;
  }
  get descricaoNoticia(){
    return this._descricao;
  }


get mostrarNoticia(){
  try {
    return this.noticiaNova();
  }catch(erro){
    return erro
   }finally{
     console.log("Executado")
   }
  }

  noticiaNova(){
       if (this._titulo != "") {

       return `
        <h1>${this._titulo}</h1>
        <p>${this._data}</p>
        <p>${this._autor}</p>
        <p class="descricao">${this._descricao}</p>
      `
      
    } else {

      throw new CustomError("A noticia nao esta completa.")
    }

  }

}


  


