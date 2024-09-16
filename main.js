//js

$(document).ready(function() {
    // Funcion que generar el RFC
    $('#generarRFC').click(function() {
        let nombre = $('#nombre').val().toUpperCase();
        let apellidoPat = $('#apellidoPat').val().toUpperCase();
        let apellidoMat = $('#apellidoMat').val().toUpperCase();
        let fechaNac = $('#fechaNac').val().split('-'); // YYYY-MM-DD 

        if (nombre && apellidoPat && apellidoMat && fechaNac) {
            let rfc = apellidoPat.substring(0, 2) + apellidoMat.charAt(0) + nombre.charAt(0) + fechaNac[0].substring(2, 4) + fechaNac[1] + fechaNac[2];
            $('#rfc').val(rfc);
        } else {
            alert('Por favor complete todos los campos.');
        }
    });

});
