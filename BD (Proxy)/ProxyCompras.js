class ProxyCompras extends CRUD_Compras {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    registrarCompra(datos) {
        console.log("🛒 Proxy: Validando compra...");
        if (!datos.items || datos.items.length === 0) {
            throw new Error("No hay items en la compra");
        }

        return this.bd.ejecutarQuery(
            `INSERT INTO compras (usuario_id, items, total) VALUES (
                ${datos.usuarioId}, 
                '${JSON.stringify(datos.items)}', 
                ${datos.total}
            )`
        );
    }
}