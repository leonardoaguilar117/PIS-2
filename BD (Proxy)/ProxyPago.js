class ProxyPago extends CRUD_Pago {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    procesarPago(pago) {
        console.log("💳 Proxy: Validando pago...");
        if (!pago.monto || !pago.metodo || !pago.referencia) {
            throw new Error("Datos de pago incompletos");
        }

        return this.bd.ejecutarQuery(
            `INSERT INTO pagos (monto, metodo, referencia) VALUES (
                ${pago.monto}, 
                '${pago.metodo}', 
                '${pago.referencia}'
            ) RETURNING id`
        );
    }
}