class ProxyCostos extends CRUD_Costos {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    calcularCostos() {
        console.log("💰 Proxy: Calculando costos...");
        return this.bd.ejecutarQuery(
            "SELECT SUM(costo) as total FROM costos WHERE fecha = CURRENT_DATE"
        );
    }
}