import { buscarEnfermedad } from "../servicios/serviciosEnfermedad"

    buscarEnfermedad()
    .then(function(respuestaBackEnd){
        console.log(respuestaBackEnd)
let fila=document.getElementById("fila")

respuestaBackEnd.forEach(function(enfermedad){
    console.log(enfermedad)
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div")
    columna.classList.add("col")


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")

    let nombre=document.createElement("h2")
    nombre.textContent=enfermedad.nombre
    let sintomas=document.createElement("p")
    sintomas.textContent=enfermedad.sintomas
    let clasificacion=document.createElement("p")
    clasificacion.textContent=enfermedad.clasificacion
    let grado=document.createElement("p")
    grado.textContent=enfermedad.grado
    let probabilidadVida=document.createElement("p")
    probabilidadVida.textContent=enfermedad.probabilidadVida

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(sintomas)
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(grado)
    tarjeta.appendChild(probabilidadVida)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    })
})