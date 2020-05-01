var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
  };

var fondo = {
  url: "tile.png",
  cargaOk: false,
};

var vaca = {
  url: "vaca.png",
  cargaOk: false,
};

var cerdo = {
  url: "cerdo.png",
  cargaOk: false,
};

var xCerdo = 200;
var yCerdo = 200;
var movimiento = 5;

var cantidad = aleatorio(1, 15);

fondo.imagen = new Image ();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image ();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}
function cargarCerdo()
{
  cerdo.cargaOk = true;
  dibujar ();
}

function dibujar()
{
  if(fondo.cargaOk)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOk)
  {
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio (0, 7);
      var y = aleatorio (0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
    if(cerdo.cargaOk)
    {
      papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
    }
  }
}

function aleatorio(min, maxi)
  {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
  }

function moverCerdo(evento)
{
  switch(evento.keyCode)
      {
        case teclas.UP:
        yCerdo = yCerdo - movimiento;
        dibujar();
        break;
        case teclas.DOWN:
        yCerdo = yCerdo + movimiento;
        dibujar();
        break;
        case teclas.LEFT:
        xCerdo = xCerdo - movimiento;
        dibujar();
        break;
        case teclas.RIGHT:
        xCerdo = xCerdo + movimiento;
        dibujar();
        break;
      }
}
