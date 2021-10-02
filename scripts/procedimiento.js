function v(){
    
  var nombre = document.getElementById("caja_nom");
  var apP = document.getElementById("caja_apP");
  var apS = document.getElementById("caja_apS");
  var dia = document.getElementById("caja_dnac");
  var mes = document.getElementById("caja_mnac");
  var año = document.getElementById("caja_anac");
  var res = document.getElementById("res");
  var sexo = document.getElementById("caja_sex");
  var estado = document.getElementById("caja_es");
  var curp = apP.value.slice(0, 2) + apS.value.slice(0, 1) + nombre.value.slice(0, 1) + año.value.slice(2, 4)
      + mes.value.slice(0, 2) + dia.value.slice(0, 2) + sexo.value.slice(0, 1) + estado.value.slice(0, 2)
      + apP.value.slice(2, 3) + apS.value.slice(2, 3) + Math.round(Math.random() * 9)
      + Math.round(Math.random() * 99);

  res.innerText = "Resultado: " + curp.toUpperCase();
   
}

function dab(){

  var num = document.getElementById("caja_nuD");
  var res = document.getElementById("caja_b");
  var numero = num.value;
  var exp;
  var digito;
  var binario;
  exp = 0;
  binario = 0;
  
  while (numero != 0) {
      digito = parseInt(numero % 2);

      binario = parseInt(binario + digito * Math.pow(10, exp));

      exp++;
      numero = parseInt(numero / 2);
    
  }
  res.value = binario;


}

function dao(){
  var num = document.getElementById("caja_nuD");
  var res = document.getElementById("caja_o");
  var numero = num.value;
  var exp;
  var digito;
  var octal;
  exp = 0;
  octal = 0;
  
  while (numero != 0) {
      digito = parseInt(numero % 8);

      octal = parseInt(octal + digito * Math.pow(10, exp));

      exp++;
      numero = parseInt(numero / 8);
    
  }
  res.value = octal;

}


function voc(){
  var cajaCadena = document.getElementById("caja_cad");
  var cajavocales = document.getElementById("caja_cv");
  var cajacons = document.getElementById("caja_cc");
  var cajarep = document.getElementById("caja_clc");
  var cajaalt = document.getElementById("caja_cce");
  var cadena = cajaCadena.value;
  var numVocales;
  var long = cadena.length;
  long = long - cadena.replace(/[^aeiouAEIOU]/g, '').length;
  cajacons.value = long;
  cajavocales.value =  cadena.replace(/[^aeiouAEIOU]/g, '').length;

  var resultado = '';

  for(let i = 0; i < cadena.length; ++i) {
      if (i % 2 == 0) {
          resultado += cadena[i].toUpperCase();
      } else {
          resultado += cadena[i].toLowerCase();
      }
  }


  cajaalt.value = resultado;
  


}