class Tarjeta extends MetodoPago {
    constructor(numeroTarjeta) {
        super();
        this.numeroTarjeta = numeroTarjeta;
    }

    realizarPago(monto) {
        const comprobante = new ComprobantePago(`TC-${this.numeroTarjeta.slice(-4)}`, monto);
        console.log(`💳 Pago con tarjeta terminado\n${comprobante.generarComprobante()}`);
        return comprobante;
    }
}