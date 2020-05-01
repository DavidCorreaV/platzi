function  Dlinea(color, x1, y1, x2, y2)
{
  lienzo2.beginPath();
  lienzo2.strokeStyle = color;
  lienzo2.moveTo(x1, y1);
  lienzo2.lineTo(x2, y2);
  lienzo2.stroke();
  lienzo2.closePath();
}

function DibClick()
{
  var linea=parseInt(L.value);
  var ancho=d.width;
  var step=ancho/linea;
  console.log(L);
  var xini = 0;
  var yini = step;
  var xfin = step;
  var yfin = ancho;
  var col = "red";

  for (var i = 0; i < linea; i++)
  {
    Dlinea(col, xini, yini, xfin, yfin);
    yini=yini+step;
    xfin=xfin+step;
    if (col == "red")
    {
    col = "blue";
    }
    else if (col == "blue")
    {
    col="yellow";
    }
    else if (col == "yellow")
    {
    col = "pink";
    }
    else
    {
    col = "red";
    }
  }

  xini = step;
  yini = 0;
  xfin = ancho;
  yfin = step;
  col = "red";

  for (var j = 0; j < linea; j++)
  {
    Dlinea(col, xini, yini, xfin, yfin);
    xini=xini+step;
    yfin=yfin+step;
    if (col == "red")
    {
    col = "blue";
    }
    else if (col == "blue")
    {
    col="yellow";
    }
    else if (col == "yellow")
    {
    col = "pink";
    }
    else
    {
    col = "red";
    }
  }

  xini = ancho-step;
  yini = 0;
  xfin = 0;
  yfin = step;
  col = "red";

  for (var k = 0; k < linea; k++)
  {
    Dlinea(col, xini, yini, xfin, yfin);
    xini=xini-step;
    yfin=yfin+step;
    if (col == "red")
    {
    col = "blue";
    }
    else if (col == "blue")
    {
    col="yellow";
    }
    else if (col == "yellow")
    {
    col = "pink";
    }
    else
    {
    col = "red";
    }
  }

  xini = step;
  yini = ancho;
  xfin = ancho;
  yfin = ancho-step;
  col = "red";

  for (var l = 0; l < linea; l++)
  {
    Dlinea(col, xini, yini, xfin, yfin);
    xini=xini+step;
    yfin=yfin-step;
    if (col == "red")
    {
    col = "blue";
    }
    else if (col == "blue")
    {
    col="yellow";
    }
    else if (col == "yellow")
    {
    col = "pink";
    }
    else
    {
    col = "red";
    }
  }


}

var d = document.getElementById("Dibujo1");
var lienzo2 = d.getContext("2d");
console.log(lienzo2);

var L = document.getElementById("txtusuario");
var Ex = document.getElementById('btnboton');
btnboton.addEventListener("click",DibClick);
