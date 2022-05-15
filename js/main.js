const precioVenta = 200;

document.getElementById("valorTicket").innerHTML=(`VALOR DE TICKET $${precioVenta}`);

function precioTotal(){ 
    let categoriaVenta = parseInt(document.getElementById("categoria").value);
    let cantidadVenta = parseInt(document.getElementById("cantidad").value);
    let total = (precioVenta*cantidadVenta)-((precioVenta*cantidadVenta)*(categoriaVenta/100));
    document.getElementById("totalPagar").innerHTML=(`Total a pagar $${total}`);
}
