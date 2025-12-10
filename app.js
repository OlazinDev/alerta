const boton_1 = document.querySelector(".menu.boton button");
const boton_2 = document.querySelector(".boton_accion button");



const alerta = (name)=>{
    console.log('El boton ',name,' es presionado');
}

boton_1.addEventListener("click",() => {
    alerta("empezar");
    alert("Boton Empezar");
});


boton_2.addEventListener("click",() =>{
    alerta("mas info");
    alert("Boton Mas Info");
});