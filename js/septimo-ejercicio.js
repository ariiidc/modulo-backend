 //ejercicio 7
const num7=parseInt(prompt('ingrese un numero le dire cual es el mayor de tres'))
const num8=parseInt(prompt('ingresa un numero le dire cual es el mayor de tres'))
const num9=parseInt(prompt('ingresa un numero le dire cual es el mayor de tres'))
 if(num7>num8&&num7>num9){
  document.write('el numero mas grande es '+ num7+'<br><br>')
 }
 else if(num8>num7&&num8>num9){
  document.write('el numero mas grande es '+ num8+'<br><br>')
 }
 else if(num9>num8&&num9>num7){
  document.write('el numero mas grande es '+ num9+'<br><br>')
 }
 else{
  document.write('Los numeros son iguales'+'<br><br>')
 }