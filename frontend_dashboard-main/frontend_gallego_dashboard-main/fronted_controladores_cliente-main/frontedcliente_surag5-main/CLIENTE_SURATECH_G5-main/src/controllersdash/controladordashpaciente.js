import { buscarPaciente } from "../servicios/serviciosPaciente"

    buscarPaciente()
    .then(function(respuestaBackEnd){
        console.log(respuestaBackEnd)

        let fila=document.getElementById("fila")
        respuestaBackEnd.forEach(function(paciente){
            console.log(paciente)
            let columna=document.createElement("div")
            columna.classList.add("col")
            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","p-5","h-100","shadow")
            let nombre=document.createElement("h2")
            nombre.textContent=paciente.nombre
            let fechaNacimiento=document.createElement("p")
            fechaNacimiento.textContent=paciente.fechaNacimiento
            let ciudad=document.createElement("p")
            ciudad.textContent=paciente.ciudad
            let correo=document.createElement("p")
            correo.textContent=paciente.correo
            let telefono=document.createElement("p")
            telefono.textContent=paciente.telefono
            let ips=document.createElement("p")
            ips.textContent=paciente.ips
            let tienePoliza=document.createElement("p")
            tienePoliza.textContent=paciente.tienePoliza
            let grupoIngreso=document.createElement("p")
            grupoIngreso.textContent=paciente.grupoIngreso
            let fechaAfiliacion=document.createElement("p")
            fechaAfiliacion.textContent=paciente.fechaAfiliacion
        
            //PASO FINAL (ORDENAR LAS CARTAS)
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(fechaNacimiento)
            tarjeta.appendChild(ciudad)
            tarjeta.appendChild(correo)
            tarjeta.appendChild(telefono)
            tarjeta.appendChild(ips)
            tarjeta.appendChild(tienePoliza)
            tarjeta.appendChild(grupoIngreso)
            tarjeta.appendChild(fechaAfiliacion)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
        });
    })