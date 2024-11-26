export async function buscarPaciente (){
    const URL = "https://localhost:8080/api/paciente"
    let peticion = {
    method: "GET"    
}
    let respuestaServidor = await fetch(URL, peticion);
    let paciente = await respuestaServidor.json()
    return paciente
}