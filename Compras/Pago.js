class Pago {
    constructor(metodo, monto) {
        this.metodo = metodo;
        this.monto = monto;
        this.comprobante = new ComprobanteCompra(
            `PAGO-${Date.now().toString().slice(-6)}`,
            monto
        );
    }

    procesarPago() {
        console.log(`💳 Pago de $${this.monto} via ${this.metodo}`);
        return this.comprobante;
    }
}