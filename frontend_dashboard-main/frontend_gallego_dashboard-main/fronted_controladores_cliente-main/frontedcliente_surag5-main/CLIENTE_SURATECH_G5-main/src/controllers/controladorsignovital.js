let nombreSignovital=document.getElementById("nombresignovital")
let valorSignovital=document.getElementById("valorsignovital")
let fechaMedidaSignovital=document.getElementById("fechamedidasignovital")

let bottonRegistroSignoVital=document.getElementById("buttonregistrosignovital")

bottonRegistroSignoVital.addEventListener("click",function(EVENTO){
    EVENTO.preventDefault()
        let datosFormularioSignoVital={
            nombre:nombreSignovital.value,
            valor:valorSignovital.value,
            fechaMedidas:fechaMedidaSignovital.value
        }

        console.log(datosFormularioSignoVital)

    Swal.fire({
        title: "Registro exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})