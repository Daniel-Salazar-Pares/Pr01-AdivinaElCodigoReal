var oculto = numeroAleatorio();
console.log(oculto);
var intentoMaximos = 5;
var intentoActual = 0;
var lletresCorrectes = 0;

function numeroAleatorio() {
  let aleatorio = Math.floor(10000 + Math.random() * 90000);
  return aleatorio;
}

function comprobarNumero() {
  lletresCorrectes = 0;
  let numero = document.getElementById("imput");
  let imput = numero.value;
  numero.value = "";
  let posicion = 100000;
  let correcto;
  
  for (let f = 0; f < 5; f++) {

    intento = Number(imput[f]);
    correcto = (oculto % posicion - oculto % (posicion / 10)) / (posicion / 10);
    posicion = posicion / 10;

    let nouDiv = document.createElement("div");
    nouDiv.className = "boxIntentos";
    nouDiv.innerHTML = imput[f];
    document.getElementById("divIntentos").appendChild(nouDiv);

    if (intento == correcto) {
      console.log("Son iguales " + intento);
      nouDiv.style.backgroundColor = "green";
      lletresCorrectes++;
    } else {
      console.log("No iguales");
      let numeroString = oculto.toString();
      if (numeroString.includes(intento)) {
        console.log("Pero lo lo incluye");
        nouDiv.style.backgroundColor = "yellow";
      }
    }
    if (lletresCorrectes == 5) {
      mensajeFinJuego();
      return;
    }
  

    if (intentoActual >= intentoMaximos) {
      mensajeSinIntentos();
      return;
    }
  }

  intentoActual++;

  switch (intentoActual) {
    case 1:
      document.getElementById("mensaje").innerHTML = "Ara et queden 4 intents, tu pots!";
      break;
    case 2:
      document.getElementById("mensaje").innerHTML = "Bon segon intent!";
      break;
    case 3:
      document.getElementById("mensaje").innerHTML = "Molt bé continua així!";
      break;
    case 4:
      document.getElementById("mensaje").innerHTML = "Ja casi ho tens!";
      break;
    case 5:
      document.getElementById("mensaje").innerHTML = "No et mentire, em decepciones";
      break;
  }
}

function mensajeFinJuego () {
  document.getElementById("mensaje").innerHTML = "Has adivinat el codi, MOLT BE!";
  document.getElementById("divMensaje").style.backgroundColor = "LightGreen";
  document.getElementById("asteriscoPrimero").innerHTML = oculto.toString()[0];
  document.getElementById("asteriscoSegundo").innerHTML = oculto.toString()[1];
  document.getElementById("asteriscoTercero").innerHTML = oculto.toString()[2];
  document.getElementById("asteriscoQuarto").innerHTML = oculto.toString()[3];
  document.getElementById("asteriscoQuinto").innerHTML = oculto.toString()[4];
}

function mensajeSinIntentos () {
  alert("T'HAS QUEDAT SENSE INTENTS!");
}
