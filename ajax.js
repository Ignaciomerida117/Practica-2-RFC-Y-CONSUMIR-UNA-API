// main js
$('#consultarAPI').click(function() {
    var userId = $('#userId').val(); // Captura el valor del ID ingresado por el usuario
    if (userId) {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/' + userId, // Concatena el ID en la URL
            method: 'GET', // Metodo Get 
            success: function(response) {
                $('#nombreAPI').val(response.name);
                $('#emailAPI').val(response.email);
            },
            error: function() {
                alert('Error al consultar la API.');
            }
        });
    } else {
        alert('Por favor ingresa un ID de usuario.');
    }
});
