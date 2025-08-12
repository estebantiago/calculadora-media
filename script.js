var distancia = document.getElementById('txtkm');
var precoCombust = document.querySelector('input#txtpreco');
var consmedio = document.querySelector('input#txtcons');
var res = document.querySelector('div#res');

function calcular(){

   if(distancia.value.trim() === "" || precoCombust.value.trim() === "" || consmedio.value.trim() === ""){
      alert('[ERRO] Você esqueceu de digitar ou algum dado está incorreto, tente novamente!')
      return;
   }
   
   var dis = Number(distancia.value) / Number(consmedio.value);
   var resultado = dis * Number(precoCombust.value) ;

   res.innerHTML=`Você vai gastar uma média de R$ ${resultado.toFixed(2)}`;
}