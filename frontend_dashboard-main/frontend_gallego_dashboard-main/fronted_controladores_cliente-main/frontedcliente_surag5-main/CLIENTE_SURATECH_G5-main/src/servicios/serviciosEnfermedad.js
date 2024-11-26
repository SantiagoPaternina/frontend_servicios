export async function buscarEnfermedad (){
    const URL = "https://localhost:8080/api/enfermedad"
    let peticion = {
    method: "GET"    
}
    let respuestaServidor = await fetch(URL, peticion);
    let enfermedad = await respuestaServidor.json()
    return enfermedad 
}