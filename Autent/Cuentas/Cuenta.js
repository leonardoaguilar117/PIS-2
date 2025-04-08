class Cuenta {
    constructor(tipo, nombre) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.sesionActiva = false;
    }

    autenticar() {
        this.sesionActiva = true;
        console.log(`✅ ${this.nombre} (${this.tipo}) ha iniciado sesión.`);
    }

    cerrarSesion() {
        this.sesionActiva = false;
        console.log(`🔴 ${this.nombre} (${this.tipo}) ha cerrado sesión.`);
    }

    errorPermiso() {
        console.log(`❌ Error: ${this.tipo} no tiene permisos para esta acción.`);
    }
}