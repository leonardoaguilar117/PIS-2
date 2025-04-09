class PagoPaypal {
    constructor(email) {
        this.email = email;
        this.apiKey = "PAYPAL-" + Math.random().toString(36).substring(2, 10);
    }

    autorizarPago(monto) {
        return `Autorizado PayPal (${this.email}): $${monto}`;
    }
}