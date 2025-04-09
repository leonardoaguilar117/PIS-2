class Paypal extends MetodoPago {
    constructor(email) {
        super();
        this.paypal = new PagoPaypal(email);
    }

    realizarPago(monto) {
        const auth = this.paypal.autorizarPago(monto);
        const comprobante = new ComprobantePago(`PP-${Date.now()}`, monto);
        console.log(`🔵 ${auth}\n${comprobante.generarComprobante()}`);
        return comprobante;
    }
}