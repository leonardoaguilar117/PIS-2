class ProxyAutenticacion extends CRUD_Autenticacion {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    autenticar(credenciales) {
        console.log("🔐 Proxy: Validando estructura de credenciales...");
        if (!credenciales.email || !credenciales.password) {
            throw new Error("Credenciales incompletas");
        }
        const resultado = this.bd.ejecutarQuery(
            `SELECT * FROM usuarios WHERE email = '${credenciales.email}' LIMIT 1`
        );
        console.log("✅ Autenticación exitosa");
        return resultado;
    }
}