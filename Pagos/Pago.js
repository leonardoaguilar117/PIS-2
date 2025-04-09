class Pago {
    constructor(metodoPago) {
        this.metodoPago = metodoPago;
    }

    procesarPago(monto) {
        return this.metodoPago.realizarPago(monto);
    }
}