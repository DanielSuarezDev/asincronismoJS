//Instanciamos o requerimos el requies
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//hacemos nuestra funcion  que recibe la api y llamando un callback
const fetchData =  (url_api) => {

  return new Promise ((resolve,reject) => {
const xhttp = new XMLHttpRequest();
 
  xhttp.open('GET', url_api, true);//instanciamos (xhttp) de xmlhttp y abrimos un conexion con et y el true activa el asincronismo
  
  xhttp.onreadystatechange  = (() => {
    if(xhttp.readyState === 4){

      (xhttp.status === 200)
      ? resolve(JSON.parse(xhttp.responseText))
      : reject(new Error ('Error', url_api))
    }
  })
  xhttp.send();
  }) 
}

module.exports = fetchData;