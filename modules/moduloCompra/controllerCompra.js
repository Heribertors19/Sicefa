
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
        let productos = "";
        let cantidad = "";
        compra.productos.forEach(function(producto){
            productos += producto.nombre + "<br>";
            cantidad += producto.cantidad + "<br>";
        })
        let registro = 
            "<tr>" + "<td>" + compra.id_compra +
            "</td><td>" + compra.empleado.persona.nombre.nombre + 
            " " + compra.empleado.persona.nombre.a_Paterno + 
            " " + compra.empleado.persona.nombre.a_Materno +
            "</td><td>" + compra.sucursal.nombre +
            "</td><td>" + productos +
            "</td><td>" + cantidad +
            "</td><td>" + compra.estatus +
            // Cambiar el formato de la fecha y hora
            "</td><td>" + compra.fecha_y_hora +
            "</td></tr>";
        html += registro;
    });
    document.getElementById("tblCompra").innerHTML = html;
}
