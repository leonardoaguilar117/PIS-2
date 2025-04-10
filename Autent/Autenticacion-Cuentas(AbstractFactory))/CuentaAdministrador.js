class CuentaAdministrador extends Cuenta {
    constructor(nombre) {
        super("Administrador", nombre);
        this.menuRestaurante = ["Pizza", "Hamburguesa", "Ensalada"];
        this.usuariosRegistrados = [];
    }

    // Métodos
    agregarUsuario(nombreUsuario, tipo) {
        this.usuariosRegistrados.push({ nombre: nombreUsuario, tipo });
        console.log(`👤 Admin ${this.nombre} agregó a ${nombreUsuario} (${tipo}).`);
    }

    eliminarUsuario(nombreUsuario) {
        console.log(`🗑️ Admin ${this.nombre} eliminó a ${nombreUsuario}.`);
    }

    agregarAlMenu(item) {
        this.menuRestaurante.push(item);
        console.log(`Admin ${this.nombre} agregó "${item}" al menú.`);
    }

    generarReporte() {
        console.log(`Reporte generado por ${this.nombre}: 
        - Usuarios: ${this.usuariosRegistrados.length}
        - Items en menú: ${this.menuRestaurante.length}`);
    }
}