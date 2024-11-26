let nombreMedico=document.getElementById("nombremedico")
let matriculaProfesionalMedico=document.getElementById("matriculamedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let ipsMedico=document.getElementById("ipsmedico")
let correoMedico=document.getElementById("correomedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionMedico=document.getElementById("direccionmedico")
let disponibleFinDeSemanaMedico=document.getElementById("disponibilidadmedico")

let bottonRegistroMedico=document.getElementById("buttonregistromedico")

bottonRegistroMedico.addEventListener("click",function(EVENTO){
    EVENTO.preventDefault()
        let datosFormularioMedico={
            nombre:nombreMedico.value,
            matriculaProfesional:matriculaProfesionalMedico.value,
            especialidad:especialidadMedico.value,
            salario:salarioMedico.value,
            IPS:ipsPaciente.value,
            correo:correoMedico.value,
            telefono:telefonoMedico.value,
            direccion:direccionMedico.value,
            disponibleFinDeSemana:disponibleFinDeSemanaMedico.value
        }

        console.log(datosFormularioMedico)


    Swal.fire({
        title: "Registro exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})