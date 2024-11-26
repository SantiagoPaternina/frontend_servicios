import { buscarMedico } from "../servicios/serviciosMedico"

    buscarMedico()
    .then(function(respuestaBackEnd){
        console.log(respuestaBackEnd)
let fila=document.getElementById("fila")
respuestaBackEnd.forEach(function(medico){
    console.log(medico)
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div")
    columna.classList.add("col")


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2")
    nombre.textContent=medico.nombre
    let matriculaProfesional=document.createElement("p")
    matriculaProfesional.textContent=medico.matriculaProfesional
    let especialidad=document.createElement("p")
    especialidad.textContent=medico.especialidad
    let salario=document.createElement("p")
    salario.textContent=medico.salario
    let ips=document.createElement("p")
    ips.textContent=medico.ips
    let correo=document.createElement("p")
    correo.textContent=medico.correo
    let telefono=document.createElement("p")
    telefono.textContent=medico.telefono
    let direccionConsultorio=document.createElement("p")
    direccionConsultorio.textContent=medico.direccionConsultorio
    let finDeSemanaDisponible=document.createElement("p")
    finDeSemanaDisponible.textContent=medico.finDeSemanaDisponible

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(matriculaProfesional)
    tarjeta.appendChild(especialidad)
    tarjeta.appendChild(salario)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(direccionConsultorio)
    tarjeta.appendChild(finDeSemanaDisponible)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    });
})