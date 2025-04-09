class GestorCompra {
    constructor() {
        this.compraActual = null;
        this.historial = new HistorialCompra();
    }

    nuevaCompra() {
        this.compraActual = new Compra();
        this.compraActual.historial = this.historial;
        console.log("🛒 Nueva compra iniciada");
        return this.compraActual;
    }
}