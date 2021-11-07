const baseUrl = "http://129.151.96.206:8080"

let Auditorio = []
let Cliente = []
let Mensaje = []
let Categoria = []
let Reservas = []


/**
 * listar Categoria
 */

 function listarCategoria() {
    $.ajax({
        url: baseUrl + "/api/Category/all",
        type:'GET',
        dataType:'json',
    
        success:function(respuesta) {
            if (respuesta.length > 0) {
                Categoria = respuesta;
                listarRespuestaCategoria(Categoria);
             
        } else {
            $("#listadoCategoria").html("<thead><tr><th></th></thead><tbody><td class='text-center'>" + "NO HAY REGISTROS" + "</td></tbody>");
        }


            
              
             
        },
    
        error:function(xhr, status){
            console.log(status);
            alert("algo sucedio mal");
        }
    });    
}

function listarRespuestaCategoria(items) {
    console.log(items);
    var tabla=`<table border="1" class="table mt-2 table-bordered table-striped">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th colspan="2">Acciones</th>
                </tr>`;
       
               
             
    for ( i = 0; i < items.length; i++) {
  
        tabla+=`<tr>
                    <td>${items[i].id} </td>
                    <td>${items[i].name} </td>
                    <td>${items[i].description} </td>
                    <td><button onclick="editarRegistro(${items[i].id})">Editar</button> </td>
                    <td><button onclick="borrar(${items[i].id})">Borrar</button> </td>
                </tr>`;        
    }
    tabla+=`</table>`
  
    $("#listadoCategoria").html(tabla);
    
    $("#btnGuardarCategoria").hide();
    $("#btnAgregarCategoria").show();
    $("#btnListarCategoria").show();
    $("#idCategoria").prop('disabled', false);
    $("#idCategoria").focus();

    //limpiar campos

    $("#idCategoria").val("");
    $("#nameCategoria").val("");
    $("#descriptionCategoria").val("");
    

}





/**
 * listar auditorio
 */

function listarA() {
    $.ajax({
        url: baseUrl + "/api/Audience/all",
        type:'GET',
        dataType:'json',
    
        success:function(respuesta) {
            if (respuesta.length > 0) {
                auditorio = respuesta;
                listarRespuesta(auditorio);
             
        } else {
            $("#listado").html("<thead><tr><th></th></thead><tbody><td class='text-center'>" + "NO HAY REGISTROS" + "</td></tbody>");
        }


            
              
             
        },
    
        error:function(xhr, status){
            console.log(status);
            alert("algo sucedio mal");
        }
    });    
}

function listarRespuesta(items) {
    console.log(items);
    var tabla=`<table border="1" class="table mt-2 table-bordered table-striped">
                <tr>
                    <th>Id</th>
                    <th>owner</th>
                    <th>capacity</th>
                    <th>Categoria</th>
                    <th>Name</th>
                    <th colspan="2">Acciones</th>
                </tr>`;
       
               
             
    for ( i = 0; i < items.length; i++) {
  
        tabla+=`<tr>
                    <td>${items[i].id} </td>
                    <td>${items[i].owner} </td>
                    <td>${items[i].capacity} </td>
                    <td>${items[i].category.name} </td>
                    <td>${items[i].name} </td>
                    <td><button onclick="editarRegistro(${items[i].id})">Editar</button> </td>
                    <td><button onclick="borrar(${items[i].id})">Borrar</button> </td>
                </tr>`;        
    }
    tabla+=`</table>`
  
    $("#listado").html(tabla);
    
    $("#btnGuardar").hide();
    $("#btnAgregar").show();
    $("#btnListar").show();
    $("#idA").prop('disabled', false);
    $("#idA").focus();

    //limpiar campos

    $("#idA").val("");
    $("#owner").val("");
    $("#capacity").val("");
    $("#categori_Id").val("");
    $("#NameA").val("");

}
/**
 * listar 
 
// cliente
*/

function listarCliente() {
    $.ajax({
        url: baseUrl + "/api/Client/all",
        type:'GET',
        dataType:'json',
    
        success:function(respuesta) {
            if (respuesta.length > 0) {
                Cliente = respuesta;
                listarRespuestaCliente(Cliente);
             
        } else {
            $("#listadoCliente").html("<thead><tr><th></th></thead><tbody><td class='text-center'>" + "NO HAY REGISTROS" + "</td></tbody>");
        }
        },
    
        error:function(xhr, status){
            console.log(status);
        }
    });    
}

function listarRespuestaCliente(items) {

    var tabla=`<table border="1" class="table mt-2 table-bordered table-striped">
               <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Age</th>
                     <th colspan="2">Acciones</th>
                </tr>`;
                
    for (let i = 0; i < items.length; i++) {
        tabla+=`<tr>
                    <td>${items[i].idClient} </td>
                    <td>${items[i].name} </td>
                    <td>${items[i].email} </td>
                    <td>${items[i].password} </td>
                    <td>${items[i].age} </td>
                    <td><button onclick="editarRegistroCliente(${items[i].id})">Editar</button> </td>
                    <td><button onclick="borrarCliente(${items[i].id})">Borrar</button> </td>
                </tr>`;        
    }

    tabla+=`</table>`
  
    $("#listadoCliente").html(tabla);
    

    //

    $("#btnGuardarC").hide();
    $("#btnAgregarC").show();
    $("#btnListarC").show();
    $("#idC").prop('disabled', false);
    $("#idC").focus();

    //limpiar campos

    $("#idC").val("");
    $("#nameC").val("");
    $("#email").val("");
    $("#age").val("");



}


/*
//listar message
*/

function listarMensaje() {
    $.ajax({
        url: baseUrl + "/api/Message/all",
        type:'GET',
        dataType:'json',
    
        success:function(respuesta) {
            if (respuesta.length > 0) {
                mensaje = respuesta;
                listarRespuestaMensaje(mensaje);
             
        } else {
            $("#listadoMensaje").html("<thead><tr><th></th></thead><tbody><td class='text-center'>" + "NO HAY REGISTROS" + "</td></tbody>");
        }
                                 
        },
    
        error:function(xhr, status){
            console.log(status);
        }
    });    
}

function listarRespuestaMensaje(items) {

    var tabla=`<table border="1" class="table mt-2 table-bordered table-striped">
               <tr>
                    <th>Id</th>
                    <th>Mensaje</th>
                    <th>Cliente</th>
                    <th>Auditorio</th>
                    <th colspan="2">Acciones</th>
                </tr>`;
                
    for (let i = 0; i < items.length; i++) {
        tabla+=`<tr>
                    <td>${items[i].idMessage} </td>
                    <td>${items[i].messageText} </td>
                    <td>${items[i].client.idClient} </td>
                    <td>${items[i].audience.id} </td>
                    <td><button onclick="editarRegistroMensaje(${items[i].id})">Editar</button> </td>
                    <td><button onclick="borrarMensaje(${items[i].id})">Borrar</button> </td>
                </tr>`;        
    }

    tabla+=`</table>`
  
    $("#listadoMensaje").html(tabla);
    //

    $("#btnGuardarM").hide();
    $("#btnAgregarM").show();
    $("#btnListarM").show();
    $("#idMe").prop('disabled', false);
    $("#idMe").focus();

    //limpiar campos

    $("#idMe").val("");
    $("#mensajeM").val("");
    $("#MesaggeIdcliente").val("");
    $("#MessageIdaudience").val("");
}



/*
//listar Reservas
*/

function listarReservas() {
    $.ajax({
        url: baseUrl + "/api/Reservation/all",
        type:'GET',
        dataType:'json',
    
        success:function(respuesta) {
            if (respuesta.length > 0) {
                Reservas = respuesta;
                listarRespuestaReservas(Reservas);
             
        } else {
            $("#listadoReservas").html("<thead><tr><th></th></thead><tbody><td class='text-center'>" + "NO HAY REGISTROS" + "</td></tbody>");
        }
                                 
        },
    
        error:function(xhr, status){
            console.log(status);
        }
    });    
}

function listarRespuestaReservas(items) {

    var tabla=`<table border="1" class="table mt-2 table-bordered table-striped">
               <tr>
                    <th>Id</th>
                    <th>Categoria</th>
                    <th>Cliente</th>
                    <th>Fecha Inicio</th>
                    <th>Fecha Fin</th>
                    <th colspan="2">Acciones</th>
                </tr>`;
                
    for (let i = 0; i < items.length; i++) {
        tabla+=`<tr>
                    <td>${items[i].idReservation} </td>
                    <td>${items[i].client.name} </td>
                    <td>${items[i].audience.name} </td>
                    <td>${items[i].startDate} </td>
                    <td>${items[i].devolutionDate} </td>
                   
                    <td><button onclick="editarRegistroReservas(${items[i].id})">Editar</button> </td>
                    <td><button onclick="borrarReservas(${items[i].id})">Borrar</button> </td>
                </tr>`;        
    }

    tabla+=`</table>`
  
    $("#listadoReservas").html(tabla);
    //

    $("#btnGuardarReservas").hide();
    $("#btnAgregarReservas").show();
    $("#btnListarReservas").show();
    $("#idReservas").prop('disabled', false);
    $("#idReservas").focus();

    //limpiar campos

    $("#idReservas").val("");
    $("#idClientes").val("");
    $("#idAuditorios").val("");
    $("#FechaIni").val("");
    $("#FechaFin").val("");
}