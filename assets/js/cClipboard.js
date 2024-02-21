// Función para copiar el contenido de la variable demo
function copyContent(id_to_find) {
    // Obtiene el contenido de la variable demo
    var textToCopy = document.getElementById(id_to_find="demo").innerText;

    // Crea un elemento de textarea temporal para copiar el texto al portapapeles
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    // Selecciona el texto en el textarea y copia al portapapeles
    tempTextarea.select();
    document.execCommand("copy");

    // Elimina el textarea temporal
    document.body.removeChild(tempTextarea);

    // Puedes agregar un mensaje o realizar otras acciones después de copiar
    alert("Texto copiado: " + textToCopy);
    }