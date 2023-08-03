
var sucursales = [];

export function añadirCampos(){
    fetch("modules/moduloSucursal/dataSucursal.json")
    .then(response => {
        return response.json();
    }).then(
        function(jsondata){
            sucursales = jsondata;
            loadTable();
        }
    );
}

function loadTable(){
    let html = "";
    sucursales.forEach(function(sucursal){
        let registro = 
            "<tr>" + "<td>" + sucursal.id_sucursal +
            "</td><td>" + sucursal.nombre +
            "</td><td>" + sucursal.nombre_titular +
            "</td><td>" + sucursal.rfc_titular +
            "</td><td>" + sucursal.domicilio +
            "</td><td>" + sucursal.colonia + 
            "</td><td>" + sucursal.ciudad +
            "</td><td>" + sucursal.estado +
            "</td><td>" + sucursal.cp +
            "</td><td>" + sucursal.telefono +
            "</td><td>" + sucursal.longitud + 
            "</td><td>" + sucursal.latitud +
            "</td><td>" + sucursal.estatus +
            "</td></tr>";
        html += registro;
    });
    document.getElementById("tblSucursal").innerHTML = html;
}
