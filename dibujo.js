var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
//Posiciones
var ii = document.getElementById("II");
var id = document.getElementById("ID");
var sd = document.getElementById("SD");
var si = document.getElementById("SI");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var coulor = "#BD00FF";
var ancho = d.width;

var pix;

