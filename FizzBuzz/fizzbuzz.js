//Escribir numeros del 1 al 100, si es x3 Fizz, si es x5 Buzz y si ambos se cumplen, FizzBuzz
var length = 100;
    length = length + 1;

for (var i = 1; i < length; i++)
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
  if (i < length-1)
    {
      document.write(", ");
    }
}
