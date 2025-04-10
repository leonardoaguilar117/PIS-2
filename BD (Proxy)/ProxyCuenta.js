class ProxyCuenta extends CRUD_Cuenta {
    constructor() {
        super();
        this.bd = new ConexionBD().conectar();
    }

    crearCuenta(datos) {
        console.log("📝 Proxy: Validando datos de cuenta...");
        const camposRequeridos = ['nombre', 'email', 'password'];
        const faltantes = camposRequeridos.filter(campo => !datos[campo]);

        if (faltantes.length > 0) {
            throw new Error(`Faltan campos: ${faltantes.join(', ')}`);
        }

        return this.bd.ejecutarQuery(
            `INSERT INTO cuentas (nombre, email, password) VALUES (
                '${datos.nombre}', 
                '${datos.email}', 
                '${datos.password}'
            )`
        );
    }
}