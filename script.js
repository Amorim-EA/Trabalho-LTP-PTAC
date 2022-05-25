let json = "noticias.json";
let XHR = new XMLHttpRequest();
XHR.open( "GET", json );

XHR.responsetype = "json";
XHR.send();

class Noticia{
  constructor( title , img , data , resumo , texto ){
    this.title = title;
    this.img = img;
    this.data = data; 
    this.resumo = resumo;
    this.texto = texto;
  }
  
  mostrarNoticia(){
    
    return `${this.title}\n\n${this.img}\n\n${this.data}\n\n${this.resumo}\n\n${this.texto}`
    
  }
}

XHR.onload = function(){
var resposta = XHR.response;

let noticias = JSON.parse(resposta);

let titulo1 = noticias[1].titulo;
let imagem1 = noticias[1].imagem_destaque;
let data1 = noticias[1].data_publicacao;
let resumo1 = noticias[1].resumo;
let texto1 = noticias[1].texto;

let noticia = new Noticia( titulo1 , imagem1 , data1 , resumo1 , texto1 );
  
console.log(noticia.mostrarNoticia());
  
}
