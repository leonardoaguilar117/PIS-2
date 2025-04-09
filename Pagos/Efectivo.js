class Efectivo extends MetodoPago {
    constructor() {
        super();
        this.qr = new QR();
    }

    realizarPago(monto) {
        const comprobante = new ComprobantePago(`EF-${Date.now()}`, monto);
        console.log(`💵 Pago en efectivo realizado\n${comprobante.generarComprobante()}`);
        console.log(this.qr.generarQR());
        return comprobante;
    }
}