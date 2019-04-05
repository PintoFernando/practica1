function matrixElementsSum(x){
  var ar1=new Array(x.length);
  var ra=0;
  for(var i=0; i<x[0].length; i++)
    ar1[i]=0;
  for(var i=0;i<x.length;i++)
    {
      for(var j=0;j<x[i].length;j++)
      {

        if(x[i][j]!=0 && ar1[j]==0)
        {
          ra+=x[i][j];
        }
        else
        {
         ar1[j]=1;
        }
      }
     }
  return ra;
}
var x=[[0,1,1,2],
       [0,5,0,0],
       [2,0,3,3],
       ];
console.log(matrixElementsSum(x));
