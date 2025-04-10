class GestorPago {
    constructor() {
        this.pagos = [];
    }

    realizarPago(metodo, monto, datosAdicionales = {}) {
        let metodoPago;

        switch (metodo) {
            case 'efectivo':
                metodoPago = new Efectivo();
                break;
            case 'tarjeta':
                metodoPago = new Tarjeta(datosAdicionales.numeroTarjeta);
                break;
            case 'paypal':
                metodoPago = new Paypal(datosAdicionales.email);
                break;
            default:
                throw new Error("Método de pago no válido");
        }

        const pago = new Pago(metodoPago);
        const comprobante = pago.procesarPago(monto);
        this.pagos.push(comprobante);
        return comprobante;
    }

    listarPagos() {
        console.log("📝 Historial de pagos:");
        this.pagos.forEach(p => console.log(p.generarComprobante()));
    }
}