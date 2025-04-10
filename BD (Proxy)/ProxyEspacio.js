class ProxyEspacio extends CRUD_Espacio {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    reservarEspacio(reserva) {
        console.log("🪑 Proxy: Validando reserva...");
        if (!reserva.usuarioId || !reserva.espacioId || !reserva.fecha) {
            throw new Error("Datos de reserva incompletos");
        }

        return this.bd.ejecutarQuery(
            `INSERT INTO reservas_espacios (usuario_id, espacio_id, fecha) VALUES (
                ${reserva.usuarioId}, 
                ${reserva.espacioId}, 
                '${reserva.fecha}'
            )`
        );
    }
}