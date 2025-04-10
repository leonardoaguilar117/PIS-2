class Compra {
    constructor() {
        this.items = [];
        this.total = 0;
        this.historial = null;
        this.pago = null;
    }

    agregarItem(item) {
        this.items.push(item);
        this.total += item.precio;
    }

    setMetodoPago(metodo) {
        this.pago = new Pago(metodo, this.total);
    }

    finalizarCompra() {
        if (!this.pago) throw new Error("Método de pago no definido");

        const comprobante = this.pago.procesarPago();
        if (this.historial) this.historial.agregarCompra(this);

        console.log(comprobante.generarComprobante());
        return comprobante;
    }
}