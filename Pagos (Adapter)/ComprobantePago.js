class ComprobantePago {
    constructor(id, monto, fecha) {
        this.id = id;
        this.monto = monto;
        this.fecha = fecha || new Date().toISOString();
    }

    generarComprobante() {
        return `COMPROBANTE #${this.id}\nMonto: $${this.monto}\nFecha: ${this.fecha}`;
    }
}
