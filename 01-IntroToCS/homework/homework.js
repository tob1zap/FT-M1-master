'use strict';

function BinarioADecimal(num) {
   var suma = 0;
   var potencia = 0;
   for (let i= num.length-1; i>=0; i--){
    if (num[i]!= 0){
      suma = suma + Math.pow(2,potencia);
   };
      potencia= potencia+ 1;
   };
return suma;
}

function DecimalABinario(num) {
var binario = [];
var numero = num;
while (numero >= 1){
   binario.push(numero % 2);
   numero = Math.floor(numero/2);
};
var binario1 =binario.reverse();
var binario2 =binario1.join('');
return binario2;
// para no hacer tanto lio con un array es mas facil hacer un string 
// y sumarlo "binario = numero%2 + binario"
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
