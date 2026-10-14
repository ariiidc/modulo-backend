//ejercicio 1
window.alert('un mensaje')
//ejercicio 2
document.write ('hello world'+'<br><br>')

//ejercicio 3
const num1=3;
const  num2=5;
document.write(' La suma de '+num1 +'+'+num2+' es '+ (num1+num2)+'<br><br>')
//ejercicio 4
const usuario=prompt('ingrese su nombre, por favor')
document.write('hola '+ usuario+'<br><br>')
//ejercicio 5
const num3=parseInt(prompt('ingrese un numero y lo sumare'))
const num4=parseInt(prompt('ingresa un numero y lo sumare'))
document.write('La suma es '+(num3+num4)+'<br><br>')
//Ejercicio 6
const num5=parseInt(prompt('ingrese un numero le dire cual es mayor de dos'))
const num6=parseInt(prompt('ingresa un numero le dire cual es mayor de dos'))
 if(num5>num6){
  document.write('el numero mas grande es '+ num5+'<br><br>')
 }
 else if(num6>num5){
  document.write('el numero mas grande es '+ num6+'<br><br>')
  }
 else{
   document.write('ambos numeros son iguales'+'<br><br>')

 }
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
 //ejercicio 8
 const num10=parseInt(prompt('ingrese un numero le dire si es divisible por 2'))
 const residuo=num10%2
 if(residuo==0){
  document.write(num10+' Es par'+'<br><br>')
 }
 else{
  document.write(num10+' Es impar'+'<br><br>')
 }
 //ejercicio 9