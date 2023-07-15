
var compras = [];

export function añadirCampos(){
    fetch("modules/moduloCompra/dataCompra.json")
    .then(response => {
        return response.json();
    }).then(
        function(jsondata){
            compras = jsondata;
            loadTable();
        }
    );
}

function loadTable(){
    let html = "";
    compras.forEach(function(compra){
        let registro = 
            "<tr>" + "<td>" + compra.id_compra +
            // Hace falta corregir el codigo de empleado
            // Cambiar el codigo de empleado por su nombre
            "</td><td>" + compra.codigo_empleado +
            // Cambiar el formato de la fecha y hora
            "</td><td>" + compra.fecha_y_hora +
            "</td></tr>";
        html += registro;
    });
    document.getElementById("tblVenta").innerHTML = html;
}
