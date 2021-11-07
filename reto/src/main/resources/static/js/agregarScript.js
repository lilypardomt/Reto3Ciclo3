const baseUrl1 = "http://129.151.96.206:8080"


/**
 * agregar Categoria
 */
 function agregarCategoria() {
    //Capturar valores de los campos en el documento html
    var datos={
        id:$("#idCategoria").val(),
        name:$("#nameCategoria").val(),
        description:$("#descriptionCategori").val(),
        
    }
console.log(datos);
    //Convertimos a JSON
    let datosPeticion=JSON.stringify(datos);

    //Hacemos petición Ajax
    $.ajax({
        url: baseUrl1+"/api/Category/save",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success:function(respuesta) {
            console.log("Insertado");
            listarCategoria();            
        },

        error:function(xhr, status){
            console.log(status);
        }
    });    
}

/**
 * agregar Auditorio
 */
function agregar() {
    //Capturar valores de los campos en el documento html
    var datos={
        id:$("#idA").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category:{id:$("#categori_Id").val()},
        name:$("#NameA").val()
    }
console.log(datos);
    //Convertimos a JSON
    let datosPeticion=JSON.stringify(datos);

    //Hacemos petición Ajax
    $.ajax({
        url: baseUrl1+"/api/Audience/save",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success:function(respuesta) {
            console.log("Insertado");
            listarA();            
        },

        error:function(xhr, status){
            console.log(status);
        }
    });    
}
/*
// cliente
*/
function agregarCliente() {
        //Capturar valores de los campos en el documento html
        var datos={
            idClient:$("#idC").val(),
        name:$("#nameC").val(),
        email:$("#email").val(),
        age:$("#age").val()
        }
    console.log(datos);
        //Convertimos a JSON
        let datosPeticion=JSON.stringify(datos);
    
        //Hacemos petición Ajax
        $.ajax({
            url: baseUrl1+"/api/Client/save",
            data:datosPeticion,
            type:'POST',
            contentType:"application/JSON",
    
            success:function(respuesta) {
                console.log("Insertado Cliente");
                listarCliente();            
            },
    
            error:function(xhr, status){
                console.log(status);
            }
        });    
    }


    /// mensajess----------------------

    function agregarMensaje() {
        //Capturar valores de los campos en el documento html
        //idMessage:$("#idMe").val(),
        var datos={
            messageText:$("#mensajeM").val(),
            client:{idClient:$("#MesaggeIdcliente").val()},
            audience:{id:$("#MessageIdaudience").val()}
       
        }
    console.log(datos);
        //Convertimos a JSON
        let datosPeticion=JSON.stringify(datos);
    
        //Hacemos petición Ajax
        $.ajax({
            url: baseUrl1+"/api/Message/save",
            data:datosPeticion,
            type:'POST',
            contentType:"application/JSON",
    
            success:function(respuesta) {
                console.log("Insertado Mensaje");
                listarMensaje();            
            },
    
            error:function(xhr, status){
                console.log(status);
            }
        });    
    }

    
    /// Reservas----------------------

    function agregarReservas() {
        //Capturar valores de los campos en el documento html
        //idMessage:$("#idMe").val(),
// var fechaInicio = document.getElementById("FechaIni").value;
// var fechaIFines = document.getElementById("FechaFin").value;
//console.log(fechaInicio + " " + fechaIFines);
        var datos={
            
            startDate:$("#FechaIni").val(),
            devolutionDate:$("#FechaFin").val(),
            client:{idClient:$("#idClientes").val()},
            audience:{id:$("#idAuditorios").val()},}
       
        
    console.log(datos);
        //Convertimos a JSON
        let datosPeticion=JSON.stringify(datos);
    
        //Hacemos petición Ajax
        $.ajax({
            url: baseUrl+"/api/Reservation/save",
            data:datosPeticion,
            type:'POST',
            contentType:"application/JSON",
    
            success:function(respuesta) {
                console.log("Insertado Reservas");
                listarReservas();            
            },
    
            error:function(xhr, status){
                console.log(status);
            }
        });    
    }
