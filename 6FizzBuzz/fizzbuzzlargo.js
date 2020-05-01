//Escribir numeros del 1 al 100, si es x3 Fizz, si es x5 Buzz y si ambos se cumplen, FizzBuzz
function fizzbuzz()
{
  fin = document.getElementById('final');
  ini = document.getElementById('inicio');
  document.write("<h1 id = 'head1'>Fizz & Buzz</h1> <h2 id = 'head2'>Bienvenido a FizzBuzz</h2>");

  for (var i = parseInt(ini.value); i <= parseInt(fin.value); i++)
  {
    if ( i % 3 == 0 && i % 5 != 0)
      {
        document.write("Fizz");
      }
    else if ( i % 5 == 0 && i % 3 != 0)
      {
        document.write("Buzz");
      }
    else if ( i % 5 == 0 && i % 3 == 0)
      {
        document.write("FizzBuzz");
      }
    else
      {
        document.write(i);
      }
    if (i < parseInt(fin.value))
      {
        document.write(", ");
      }
  }
}

var fin = 0;
var ini = 0;
var mensaje;

var Ex = document.getElementById('enviar');
enviar.addEventListener("click", fizzbuzz);
