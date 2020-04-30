function  dLinea(color, x1, y1, x2, y2, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.stroke();
  lienzo.closePath();
}

function dTeclado(evento)
{
  var mov = 10
  switch (evento.keyCode)
  {
    case tecla.UP:
      dLinea(color,x,y,x,y - mov,papel);
        y=y-mov;
      break;
    case tecla.DOWN:
      dLinea(color,x,y,x,y + mov,papel);
      y=y+mov;
      break;
    case tecla.LEFT:
      dLinea(color,x,y,x - mov,y,papel);
      x=x-mov;
      break;
    case tecla.RIGHT:
      dLinea(color,x,y,x + mov,y,papel);
      x=x+mov;
      break;

    default:
      switch (color)
      {
        case "red":
          color = "white";
          break;
        case "white":
          color = "blue";
          break;
        case "blue":
          color = "green";
          break;
        case "green":
          color = "red";
          break;
        default:

      }


  }

}

function dMouse(evento)
{
console.log(evento);
x = evento.layerX;
y = evento.layerY;
dLinea(color,x+1,y+1,x-1,y-1,papel);
}

var tecla = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var d = document.getElementById("mapa");
var papel = d.getContext('2d');
var ancho=d.width;
var x1 = ancho/2;
var x2 = ancho/2;
var y1 = ancho/2;
var y2 = ancho/2;
var x = 0;
var y = 250;
var color = "red";

dLinea(color,x-1,x-1,x+1,x+1,papel);
document.addEventListener("keydown", dTeclado);
document.addEventListener("mousemove", dMouse);
