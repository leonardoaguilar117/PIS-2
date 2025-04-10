class ProxyMenu extends CRUD_Menu {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    obtenerMenu() {
        console.log("🍽️ Proxy: Obteniendo menú...");
        return this.bd.ejecutarQuery(
            "SELECT * FROM menu WHERE disponible = true"
        );
    }
}
