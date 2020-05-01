function aleatorio(min, max)
{
var resultado = Math.floor((max-min+1)*Math.random())+min;
return resultado;
}

// function dMapa()
// {
//   lienzo.drawImage(fondo, 0, 0);
// }
//
// function dCerdo()
// {
//   for (var i = 0; i < aleatorio(0,15); i++)
//   {
//     lienzo.drawImage(icerdo, aleatorio(40, 460), aleatorio(40, 460));
//   }
//
// }
//
// function dVaca()
// {
//   for (var i = 0; i < aleatorio(0,10); i++)
//   {
//     lienzo.drawImage(ivaca, aleatorio(40, 460), aleatorio(40, 460));
//   }
//
// }
//
// function dPollo()
// {
//   for (var i = 0; i < aleatorio(0,30); i++)
//   {
//     lienzo.drawImage(ipollo, aleatorio(40, 460), aleatorio(40, 460));
//   }
// }

function cMapa()
{
  fondo.cargaOK = true;
  dibujar();
}

function cVaca()
{
  vaca.cargaOK = true;
  dibujar();
}

function cCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cPollo()
{
  pollo.cargaOK = true;
  dibujar();
}

function cViki()
{
  viki.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOK){
  lienzo.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK){
    for (var i = 0; i < cantV; i++)
      {
        lienzo.drawImage(vaca.imagen, aleatorio(0, 420), aleatorio(0, 420));
      }
  }
  if (cerdo.cargaOK){
    for (var i = 0; i < cantC; i++)
      {
        lienzo.drawImage(cerdo.imagen, aleatorio(0, 420), aleatorio(0, 420));
      }
  }
  if (pollo.cargaOK){
    for (var i = 0; i < cantP; i++)
      {
        lienzo.drawImage(pollo.imagen, aleatorio(0, 420), aleatorio(0, 420));
      }
  }
  if (viki.cargaOK);
  {
    lienzo.drawImage(viki.imagen,xx,yy);
  }
}

var xx = 210;
var yy = 210;
var cantV = aleatorio(1,15);
var cantC = aleatorio(1,25);
var cantP = aleatorio(1,35);
console.log(cantC);
console.log(cantP);
console.log(cantV);

var vp = document.getElementById('villap');
var lienzo = vp.getContext("2d");
var fondo = {
  url: "tile.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
}

var viki = {
  url: "char.png",
  cargaOK: false
}

var tecla = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cMapa);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cCerdo);

viki.imagen = new Image();
viki.imagen.src = viki.url;
viki.imagen.addEventListener("load", cViki);

// if (pollo.cargaOK){
//   if (vaca.cargaOK){
//     if (cerdo.cargaOK){
//       if (fondo.cargaOK){

        document.addEventListener("keyup", dMove);

//       }
//     }
//   }
// }

function dMove(evento) {
  var mov = 10;
  switch (evento.keyCode)
  {
    case tecla.UP:
      yy = yy - mov;
    break;
    case tecla.DOWN:
      yy = yy + mov;
    break;
    case tecla.LEFT:
      xx = xx - mov;
    break;
    case tecla.RIGHT:
      xx = xx + mov;
    break;

    default:
  }
  dibujar();
}



// var cuanto = 1000
// for (var i = 0; i < cuanto; i++){
// var z = aleatorio(10, 20);
// if (i === cuanto-1)
// {
//   document.write(z);
// }
// else
// {
//   document.write(z+', ');
// }
// }
