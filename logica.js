const solicitarColor = (componente) => {
    let valor = prompt(
        `Ingrsá un valor para el color ${componente} entre 0 y 255`);
    return parseInt(valor);
};

let rojo = solicitarColor("rojo")
let verde = solicitarColor("verde")
let azul = solicitarColor("azul")

if (rojo >= 0 && rojo <= 255 &&
    verde >= 0 && verde <= 255 &&
    azul >= 0 && azul <= 255) {

    document.body.style.backgroundColor = `rgb(${rojo}, ${verde},${azul})`;
}
else {
    alert(`Ingresá valores rgb válidos`)
}


