function generarTablas() {
    // Obtenemos el contenedor donde se mostrará la tabla
    let contenedor = document.getElementById("divTabla");
    
    // Leemos el valor ingresado en la caja de texto y lo convertimos a número entero
    let numero = parseInt(document.getElementById("txtNumero").value);
    
    // Creamos una variable para acumular el contenido HTML
    let contenido = "<h2>Tabla del " + numero + "</h2><div class='tabla-grid'>";
    
    // Usamos el ciclo for para generar los elementos del 1 al 10 según el número ingresado
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        contenido = contenido + "<div class='fila'>" + numero + " x " + i + " = " + resultado + "</div>";
    }
    
    contenido = contenido + "</div>";
    
    // Inyectamos todo el contenido dinámico en el contenedor
    contenedor.innerHTML = contenido;
}