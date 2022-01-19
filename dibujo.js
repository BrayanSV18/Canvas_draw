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

function dibujoPorClick(){
  lienzo.clearRect(0, 0, 300, 300); //Reinicia el CANVAS cada vez que se ingresa hace click
  //Bordes del Canvas
  if(ii.checked || id.checked || sd.checked || si.checked){
    dibujarLinea(coulor, 1, 1, 1, ancho-1);
    dibujarLinea(coulor, 1, ancho-1, ancho-1, ancho-1);
    dibujarLinea(coulor, ancho-1, ancho-1, ancho-1, 1);
    dibujarLinea(coulor, ancho-1, 1, 1, 1);
  }

  var lines = parseInt(texto.value);
  pix = ancho/lines;
  if(ii.checked){
    draw_left_bottom(lines);
  }
  if (id.checked) {
    draw_right_bottom(lines);
  }
  if (sd.checked) {
    draw_right_top(lines);
  }
  if (si.checked) {
    draw_left_top(lines);
  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function draw_left_bottom(lines_amount){
  for(l = 0 ; l < lines_amount ; l++){
    dibujarLinea(coulor, 0, l*pix, (l+1)*pix, ancho);
  }
}

function draw_right_bottom(lines_amount){
  for(l = 0 ; l < lines_amount ; l++){
    dibujarLinea(coulor, l*pix, ancho, ancho, ancho-((l+1)*pix));
  }
}

function draw_right_top(lines_amount){
  for(l = 0 ; l < lines_amount ; l++){
    dibujarLinea(coulor, ancho, ancho-(l*pix), ancho-((l+1)*pix), 0);
  }
}

function draw_left_top(lines_amount){
  for(l = 0 ; l < lines_amount ; l++){
    dibujarLinea(coulor, ancho-(l*pix), 0, 0, (l+1)*pix);
  }
}