var aleatorio;
var oculto;

function numeroAleatorio() {
    aleatorio = Math.random() * 100000;
    oculto =Math.trunc(aleatorio);
    console.log("Numero generado correctamente");
    console.log("El numero oculto es: " + oculto);
}
function botonClicado() {
    let imput = document.getElementById("imput").value;
    let posicion = 100000
    let correcto
    for (let f = 0; f < 5; f++) {
        intento = Number(imput[f]);
        correcto = (oculto%posicion - oculto%(posicion/10))/(posicion/10);
        posicion = posicion/10;
        if (intento ==  correcto) {
            console.log("Son iguales");

        } else {
            console.log("No iguales");
            let numeroString = oculto.toString();
            if (numeroString.includes(intento)) {
                
            }
        }
    }
    let numero = Number(imput);
    
}