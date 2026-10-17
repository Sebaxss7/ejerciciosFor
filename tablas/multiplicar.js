function generarTablas(){
    
    let contenedor = document.getElementById("divTabla");
    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        let resultado = 5 * i;
        contenido = contenido + "<div class='fila'>5 x " + i + " = " + resultado + "</div>";
    }
    contenedor.innerHTML = contenido;
}