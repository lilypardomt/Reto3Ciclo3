
function listarReservas() {
    $.ajax({
        url: baseUrl + "/api/Reservation/all",
        type:'GET',
        dataType:'json',
    
        success:function(respuesta) {
            console.log(respuesta)  
        pintarrespuesta();                                 
        },
    
        error:function(xhr, status){
            console.log(status);
        }
    });    
}

function pintarrespuesta(respuesta){
    var tabla=`<table border="1" class="table mt-2 table-bordered table-striped">
    <tr>
         <th>Id</th>
         <th>Categoria</th>
         <th>Cliente</th>
         <th>Fecha Inicio</th>
         <th>Fecha Fin</th>
         <th colspan="2">Acciones</th>
     </tr>`;

     tabla+=`<tr>
     <td>${items[i].Complete} </td>
     <td>${items[i].client.name} </td>
     <td>${items[i].audience.name} </td>
     <td>${items[i].startDate} </td>
     <td>${items[i].devolutionDate} </td>
    
     <td><button onclick="editarRegistroReservas(${items[i].id})">Editar</button> </td>
     <td><button onclick="borrarReservas(${items[i].id})">Borrar</button> </td>
 </tr>`; 

}