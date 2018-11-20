var tiempo=[];
var mejorResultado=1000;
var peorResultado=0;
var mediaResultado=0;
var contador=0;

function mejor(tiempoUno,mejorTemp){
  for (let i = 0; i < tiempoUno.length; i++) {
     if (tiempoUno[i]<mejorTemp) {
       mejorTemp=tiempoUno[i];
     }
   }
   console.log(`El mejor tiempo es ${mejorTemp}`);
}

function peor(tiempoDos,peorTemp){
  for (let i = 0; i < tiempoDos.length; i++) {
     if (tiempoDos[i]>peorTemp) {
       peorTemp=tiempoDos[i];
     }
   }
   console.log(`El peor tiempo es ${peorTemp}`);
}

function media(tiempoTres,med){
  for (let i = 0; i < tiempoTres.length; i++) {
      med=tiempoTres[i]+med;
      }
      med=med/tiempoTres.length;
      console.log(`La media de horas es ${med}`);
    }


while (true) {
  contador++
  var contadorVueltas=0;
  contadorVueltas=contador;
  tiempo1=prompt(`Escribe el tiempo de la vuelta numero ${contadorVueltas}`);
  if (tiempo1>0) {
    tiempo.push(tiempo1);
  }
  else {
    if (tiempo1=="Salir") {
    mejor(tiempo,mejorResultado);
    peor(tiempo,peorResultado);
    media(tiempo,peorResultado);
    break;
    }
}
}
