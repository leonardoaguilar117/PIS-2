class ProxyInventario extends CRUD_Inventario {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    actualizarInventario(item) {
        console.log("📦 Proxy: Actualizando inventario...");
        if (!item.id || item.cantidad === undefined) {
            throw new Error("Datos de inventario inválidos");
        }

        return this.bd.ejecutarQuery(
            `UPDATE inventario SET cantidad = ${item.cantidad} WHERE id = ${item.id}`
        );
    }
}