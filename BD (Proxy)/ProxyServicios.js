class ProxyServicios extends CRUD_Servicios {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    obtenerServicios() {
        console.log("🔄 Proxy: Cacheando servicios...");
        return this.bd.ejecutarQuery(
            "SELECT * FROM servicios WHERE activo = true"
        );
    }
}