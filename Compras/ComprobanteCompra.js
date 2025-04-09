class ComprobanteCompra {
    constructor(id, total, fecha = new Date().toLocaleString()) {
        this.id = id;
        this.total = total;
        this.fecha = fecha;
    }

    generarComprobante() {
        return `🟢 COMPROBANTE #${this.id}\nTotal: $${this.total}\nFecha: ${this.fecha}`;
    }
}