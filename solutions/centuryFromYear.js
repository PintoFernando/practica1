function centuryFromYear(p)
{
      j=parseInt(p/100 , 10);
      if(p%100!=0)
         j++;
      return j;
}

var a=1905;


console.log(centuryFromYear(a));
