function reverseInPrentheses(cad)
{
  var a1 = "" , a2 = "" , a3 = "" ;
  var i = 0 , j = 0 ;
  for (i = 0; i < cadena.length; i++)
  {
      if(cadena.charAt(i)== '(')
      {
        for (var j = i + 1 ; cad.charAt( j ) != ')' ; j++)
        {
            if(cad.charAt(j)!='(')
            {
                 a2 = a2 + cad.charAt( j ) ;
            }
        }
        for (var k = a2.length; k >= 0 ; k--)
        {
          a3 = a3 + a2.charAt( k ) ;
        }
        a1 = a1 + a3 ;
        i = j ;
        a2 = "" , a3 = "" ;
      }
      else
      {  if(cad.charAt(i)!=')')
            a1 = a1 + cad.charAt(i) ;
      }
  }
  return a1;
}
console.log (reverseInPrentheses(foo(bar)baz(blim)));
