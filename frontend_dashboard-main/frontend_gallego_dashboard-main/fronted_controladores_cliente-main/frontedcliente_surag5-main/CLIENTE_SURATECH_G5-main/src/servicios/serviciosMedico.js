export async function buscarMedico (){
    const URL = "https://localhost:8080/api/medico"
    let peticion = {
    method: "GET"    
}
    let respuestaServidor = await fetch(URL, peticion);
    let medico = await respuestaServidor.json()
    return medico 
}