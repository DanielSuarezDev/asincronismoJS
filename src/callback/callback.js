//Instanciamos o requerimos el requies
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const api = 'https://rickandmortyapi.com/api/character/';
//hacemos nuestra funcion  que recibe la api y llamando un callback
function fetchData (url_api, callback){
  let xhttp = new XMLHttpRequest();
 
  xhttp.open('GET', url_api, true);//instanciamos (xhttp) de xmlhttp y abrimos un conexion con et y el true activa el asincronismo
  
  xhttp.onreadystatechange  = function (event){
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){
        callback(null, JSON.parse(xhttp.responseText))
      }
      else{
        const error = new Error (`Error ${url_api}`);
        return callback(error, null)
      }
    }
  }
  xhttp.send();
}

fetchData(api,function (error1,data1){
  if(error1) return console.error(error1);
  fetchData(api + data1.results[0].id, function (erro2,data2){
    if(erro2) console.error(error2);
    fetchData(data2.origin.url, function(error3,data3){
      if(error3) return console.error(error3)
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});

