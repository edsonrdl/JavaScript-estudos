
var ingredientes=['mel','água','sal','mostarda'];


function capitalizar(ingredientes){
   var modificado=[];
  for(var i=0;i<ingredientes.length;i++){
  
    
    var letraInicial= ingredientes[i].charAt(0).toUpperCase();
    var restoTexto= ingredientes[i].slice(1);
    var resultado =letraInicial+restoTexto;
    modificado[i]=resultado;
   }
   return modificado
}
console.log(capitalizar(ingredientes))

function  ordernar(ingredientes){
 return ingredientes.sort(function(a,b){
    return a.localeCompare(b); 

   }) 
}
console.log(ordernar(ingredientes))

var resultadoCapitalizado=capitalizar(ingredientes);
console.log(resultadoCapitalizado)
var resultadoOrdernado=ordernar(resultadoCapitalizado);//vai modificar o resultadoCapitalizado //

console.log(resultadoCapitalizado)
console.log(resultadoOrdernado)




