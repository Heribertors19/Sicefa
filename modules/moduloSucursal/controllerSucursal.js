
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
            "</td></tr>";
        html += registro;
    });
    document.getElementById("tblSucursal").innerHTML = html;
}
