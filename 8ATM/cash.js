class Billete //Crea la clase y carga la imagen desde el arreglo imagenes. Ensayo si se puede concatenar en 8
{
  constructor(v,c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cant = c;
    this.imagen.src = imagenes["b" + this.valor];
  }
  mostrar()
  {
    document.getElementById('billetes').appendChild(this.imagen); // agrega al arbol la imagen con el id del tag.
  }

}

function eDine()//entrega el dinero
{
  bill.innerHTML = " ";
  var cajon = document.getElementById('dinero');//toma el valor introducido por el usuario (limitado a números) por el input type
  dinero = parseInt(cajon.value); //castea el string a un numero
  var ope = dinero; //guarda el valor introducido en otra variable, pues dinero la modificaremos

  if (dinero % caja[2].valor != 0) //Valida que el valor sea posible de entregar segun las denominaciones existentes. Desafortunadamente requiere que la denominacion
  {                                //mas pequeña se ubique en caja[2], pero sirve ademas para validar resultados decimales y negativos
    alert("El monto introducido no es válido.");
    hora = new Date();
    console.log("Operación ilegal por " + ope + " en " + hora);//registra en el consolelog
  }
  else if (ope > total) //Valida fondos insuficientes
  {
    alert("Este cajero no cuenta con fondos suficientes para realizar el retiro.");
    hora = new Date();
    console.log("Operación fallida por fondos insuficientes. " + ope + " en "+ hora); //registra en consolelog
  }
  else //Entrega el dinero y registra el resultado usando innerHTML.
  {
    for (var bi of caja)//Algoritmo base explicado en el video
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
        for(y of caja) //Esta parte retira el dinero entregado del dinero disponible
        {
          if (bi.valor == y.valor)
          {
            y.cant=y.cant-papeles;
          }
        }
        dinero = dinero - (bi.valor*papeles);
      }
    }
    console.log(entregado);
    res.innerHTML = "Usted ha retirado: <br/>";// pone un titulo estático (y funciona como una especie de clear)
    for (var x of entregado)
      {
        if(x.cant > 0)//ignora billetes con cantidad cero
        {
          res.innerHTML += x.cant + " billete(s) de " + x.valor + "<br/>";//añade al mensaje estatico los billetes entregados
        for (var co = 0; co < x.cant; co++)//dibuja los billetes en el tag bill del documento
          {
            bill.innerHTML += " ";
            x.mostrar();
          }
        }
      }
      bill.innerHTML += " <br/> Gracias por usar ATM4u<3. ¡Vuelva pronto! <br/> <br/>"; //Separador entre transacciones
    hora = new Date();
    console.log("Operación exitosa por " + ope + " en " + hora);//log de operación exitosa

    total = total - ope;//Descuenta el dinero entregado con exito de el dinero calculado en caja inicial

    console.log("El total en caja es de " + total );//log de cuanto queda en caja
  }
  //Limpieza de variables para la siguiente transaccion
  dinero = 0;
  entregado = [];
  div = 0;
  papel = 0;
}

var disponible = [8,6,4] //Billetes disponibles de cada denominacion

var imagenes = []; //ruta de imagenes
imagenes["b50"] = "50.png";
imagenes["b20"] = "20.png";
imagenes["b10"] = "10.png";

var caja = []; //crea la caja con billetes disponibles
caja.push(new Billete(50, disponible[0]));
caja.push(new Billete(20, disponible[1]));
caja.push(new Billete(10, disponible[2]));

var total = 0; //setea el total de caja en cero

for (var z of caja)//Calcula con las denominaciones y cantidades cuanta plata hay en caja y lo reporta
{
total = total + parseInt(z.cant)*parseInt(z.valor);
}
console.log("Bienvenido, en la caja hay " + total);

//Variables y getElementById('id')
var dinero = 0;
var entregado = [];
var div = 0;
var papel = 0;

bill = document.getElementById('billetes');
res = document.getElementById('resultado');
b = document.getElementById('butt');
b.addEventListener('click', eDine);//evento del click
