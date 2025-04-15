
class HistorialCompra {
    constructor() {
        this.compras = [];
    }

    agregarCompra(compra) {
        this.compras.push({
            fecha: new Date().toLocaleString(),
            items: compra.items.map(item => item.nombre || item.detallar()),
            total: compra.total
        });
    }

    mostrarHistorial() {
        console.log("HISTORIAL DE COMPRAS:");
        this.compras.forEach((compra, i) => {
            console.log(`\nCompra #${i + 1} (${compra.fecha})`);
            console.log("Items:", compra.items.join("\n      "));
            console.log("Total: $" + compra.total);
        });
    }
}