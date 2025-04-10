class ProxyHorario extends CRUD_Horario {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    obtenerHorarios() {
        console.log("⏰ Proxy: Obteniendo horarios...");
        return this.bd.ejecutarQuery(
            "SELECT * FROM horarios ORDER BY hora_apertura"
        );
    }
}