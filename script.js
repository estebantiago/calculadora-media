let distancia = document.getElementById('txtkm');
let precoCombust = document.querySelector('input#txtpreco');
let consmedio = document.querySelector('input#txtcons');
let res = document.querySelector('div#res');

function calcular(){

   if(distancia.value.trim() === "" || precoCombust.value.trim() === "" || consmedio.value.trim() === ""){
      alert('[ERRO] Você esqueceu de digitar ou algum dado está incorreto, tente novamente!')
      return;
   }
   
   let dis = Number(distancia.value) / Number(consmedio.value);
   let resultado = dis * Number(precoCombust.value) ;

   res.innerHTML=`Você vai gastar uma média de R$ ${resultado.toFixed(2)}`;
}