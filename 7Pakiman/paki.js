class Pakiman
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.PV = v;
    this.PA = a;

    this.imagen.src = imagenes[this.nombre];
  }

  hablar()
  {
  document.write(this.nombre);
  }

  mostrar()
  {
  document.write("<p>");
  document.write("<h1>" + this.nombre + "</h1> <br/>");
  document.body.appendChild(this.imagen);
  document.write("<h2> PV: </h2>" + this.PV + "<br/>");
  document.write("<h2> PA: </h2>" + this.PA + "<br/>");
  document.write("<hr/> <p>");
  }
}

var imagenes = [];
  imagenes["Cauchin"] = "vaca.png";
  imagenes["Pokacho"] = "pollo.png";
  imagenes["Tocinauro"] = "cerdo.png";


var pakidex = [];
pakidex.push(new Pakiman("Cauchin", 100, 30, "vaca.png"));
pakidex.push(new Pakiman("Pokacho", 80, 50, "pollo.png"));
pakidex.push(new Pakiman("Tocinauro", 130, 20, "cerdo.png"));

// Opción básica (X in Collection)
// for (var x in pakidex)
// {
// pakidex[x].mostrar();
// }

for (var x of pakidex)
{
  x.mostrar();
}
