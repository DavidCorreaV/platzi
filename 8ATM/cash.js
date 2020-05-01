class Billete
{
  constructor(v,c)
  {
    this.valor = v;
    this.cant = c;
  }
}

function eDine()
{
  for (var bi of caja)
  {
    if (dinero > 0)
      {
        div = Math.floor(dinero/bi.valor);
        if (div > bi.cant)
          {
            papeles = bi.cant;
          }
        else
          {
            papeles = div;
          }
        entregado.push(new Billete(bi.valor, papeles));
        dinero = dinero - (bi.valor*papeles);
      }
  }
  console.log(entregado);
  if (dinero % caja[2].valor != 0)
  {
    alert("El monto introducido no es válido.");
  }
  else if (dinero > 0)
  {
    alert("Este cajero no cuenta con fondos suficientes para realizar el retiro.");
  }
}

var disponible = [3,2,2]

var caja = [];
caja.push(new Billete(50, disponible[0]));
caja.push(new Billete(20, disponible[1]));
caja.push(new Billete(1, disponible[2]));

var dinero = 101;
var entregado = [];
var div = 0;
var papel = 0;

b = document.getElementById('butt');
b.addEventListener('click', eDine);
