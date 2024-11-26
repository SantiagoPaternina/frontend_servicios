//OBJETIVO: Capturar los datos de un formulario 

//1. por cada input, select, textarea del formulario se crea una variable 
//2 por cada variable debo utilizar el DOM para asociar 
//el html con javascript 

let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let fechaNacimientoPaciente=document.getElementById("nacimientopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")
let polizaPaciente=document.getElementById("polizapaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoIngresoPaciente=document.getElementById("ingresospaciente")
let  fechaAfiliacionPaciente=document.getElementById("afiliacionpaciente")

//3. CREAR UNA VARIABLE PARA ASOCIARLA AL ID DEL BOTON QUE TENGO EN EL HTML
let bottonRegistroPaciente=document.getElementById("buttonregistropaciente")

//4. DETECTAR ACCIONES O EVENTOS EN EL EVENTO 
bottonRegistroPaciente.addEventListener("click",function(EVENTO){
    EVENTO.preventDefault()
        let datosFormularioPaciente={
            nombre:nombrePaciente.value,
            fechaNacimiento:fechaNacimientoPaciente.value,
            ciudad:ciudadPaciente.value,
            correo:correoPaciente.value,
            telefono:telefonoPaciente.value,
            IPS:ipsPaciente.value,
            tienePoliza:polizaPaciente.value,
            grupoIngreso:grupoIngresoPaciente.value,
            fechaAfiliacion:fechaAfiliacionPaciente.value
        }

        console.log(datosFormularioPaciente)


    Swal.fire({
        title: "Registro exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})


