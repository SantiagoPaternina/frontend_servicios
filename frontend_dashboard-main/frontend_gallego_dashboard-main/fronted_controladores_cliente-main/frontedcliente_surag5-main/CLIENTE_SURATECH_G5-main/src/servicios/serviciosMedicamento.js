export async function buscarMedicamento (){
    const URL = "https://localhost:8080/api/medicamento"
    let peticion = {
    method: "GET"    
}
    let respuestaServidor = await fetch(URL, peticion);
    let medicamento = await respuestaServidor.json()
    return medicamento 
}